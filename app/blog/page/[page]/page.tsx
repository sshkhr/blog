import ListLayout from '@/layouts/ListLayoutWithTags'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { Redis } from '@upstash/redis'

const POSTS_PER_PAGE = 5
const redis = Redis.fromEnv()

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default async function Page({ params }: { params: { page: string } }) {
  // 1) Grab all sorted posts
  const sortedBlogPosts = allCoreContent(sortPosts(allBlogs))

  // 2) Fetch a view count for each post (skip drafts)
  const allViewCounts = await Promise.all(
    sortedBlogPosts.map(async (post) => {
      // Skip fetching for draft posts
      if (post.draft) return 0
      const count = await redis.get<number>(['pageviews', 'projects', post.slug].join(':'))
      return count ?? 0
    })
  )

  // 3) Attach totalViews to EVERY post, so they're all the same type
  const postsWithViews = sortedBlogPosts.map((post, i) => ({
    ...post,
    totalViews: allViewCounts[i],
  }))

  // 4) Slice for the current page
  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = postsWithViews.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  // 5) Build pagination object
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(sortedBlogPosts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      // Pass the entire array (with totalViews) for pagination
      posts={postsWithViews}
      // Pass the sliced subset for the current page
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
