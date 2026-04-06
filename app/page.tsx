import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allLogs } from 'contentlayer/generated'
import Main from './Main'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const sortedLogs = sortPosts(allLogs)
  const logs = allCoreContent(sortedLogs)
  return <Main posts={posts} logs={logs} />
}
