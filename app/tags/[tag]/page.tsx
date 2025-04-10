import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs } from 'contentlayer/generated'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }))
  return paths
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tag = decodeURI(params.tag)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)

  const filteredPosts = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )

  // Fetch view counts only for non-draft posts
  const viewCounts = await Promise.all(
    filteredPosts.map(async (post) => {
      // Skip fetching for draft posts
      if (post.draft) return 0
      const count = await redis.get<number>(['pageviews', 'projects', post.slug].join(':'))
      return count ?? 0
    })
  )

  const postsWithViews = filteredPosts.map((post, i) => ({
    ...post,
    totalViews: viewCounts[i],
  }))

  return <ListLayout posts={postsWithViews} title={title} />
}
