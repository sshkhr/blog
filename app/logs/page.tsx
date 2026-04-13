import ListLayoutLogs from '@/layouts/ListLayoutLogs'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allLogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import { Redis } from '@upstash/redis'

const POSTS_PER_PAGE = 10
const redis = Redis.fromEnv()

export const metadata = genPageMetadata({ title: 'Logs' })

export default async function LogsPage() {
  const sortedLogs = allCoreContent(sortPosts(allLogs))
  const pageNumber = 1

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
