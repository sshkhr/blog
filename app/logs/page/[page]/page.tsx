import ListLayoutLogs from '@/layouts/ListLayoutLogs'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allLogs } from 'contentlayer/generated'
import { Redis } from '@upstash/redis'

const POSTS_PER_PAGE = 10
const redis = Redis.fromEnv()

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allLogs.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
  return paths
}

export default async function Page({ params }: { params: { page: string } }) {
  const sortedLogs = allCoreContent(sortPosts(allLogs))

  const allViewCounts = await Promise.all(
    sortedLogs.map(async (post) => {
      if (post.draft) return 0
      const count = await redis.get<number>(['pageviews', 'projects', post.slug].join(':'))
      return count ?? 0
    })
  )

  const logsWithViews = sortedLogs.map((post, i) => ({
    ...post,
    totalViews: allViewCounts[i],
  }))

  const pageNumber = parseInt(params.page as string)
  const initialDisplayPosts = logsWithViews.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(sortedLogs.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayoutLogs
      posts={logsWithViews}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Logs"
    />
  )
}
