import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { Redis } from '@upstash/redis'

const POSTS_PER_PAGE = 5
const redis = Redis.fromEnv()

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const sortedPosts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1

  const allViewCounts = await Promise.all(
    sortedPosts.map(async (post) => {
      const count = await redis.get<number>(['pageviews', 'projects', post.slug].join(':'))
      return count ?? 0
    })
  )

  const postsWithViews = sortedPosts.map((post, i) => ({
    ...post,
    totalViews: allViewCounts[i],
  }))

  const initialDisplayPosts = postsWithViews.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(sortedPosts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={postsWithViews}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
