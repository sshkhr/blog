import { slug } from 'github-slugger'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { allBlogs, allLogs } from 'contentlayer/generated'
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

  const filteredBlogs = allCoreContent(
    sortPosts(allBlogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )
  const filteredLogs = allCoreContent(
    sortPosts(allLogs.filter((post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)))
  )

  // Merge and sort by date
  const allFiltered = [...filteredBlogs, ...filteredLogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Fetch view counts only for non-draft posts
  const viewCounts = await Promise.all(
    allFiltered.map(async (post) => {
      if (post.draft) return 0
      const count = await redis.get<number>(['pageviews', 'projects', post.slug].join(':'))
      return count ?? 0
    })
  )

  const postsWithViews = allFiltered.map((post, i) => ({
    ...post,
    totalViews: viewCounts[i],
  }))

  return <ListLayout posts={postsWithViews} title={title} />
}
