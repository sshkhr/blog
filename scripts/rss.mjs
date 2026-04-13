import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import tagData from '../app/tag-data.json' assert { type: 'json' }
import { allBlogs, allLogs } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const generateRssItem = (config, post, contentType = 'blog') => `
  <item>
    <guid>${config.siteUrl}/${contentType === 'log' ? 'logs' : 'blog'}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${contentType === 'log' ? 'logs' : 'blog'}/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    <category>${contentType}</category>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (config, posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post, post._contentType)).join('')}
    </channel>
  </rss>
`

async function generateRSS(config, allBlogs, allLogs, page = 'feed.xml') {
  const publishBlogs = allBlogs
    .filter((post) => post.draft !== true)
    .map((p) => ({ ...p, _contentType: 'blog' }))
  const publishLogs = allLogs
    .filter((post) => post.draft !== true)
    .map((p) => ({ ...p, _contentType: 'log' }))
  const allContent = sortPosts([...publishBlogs, ...publishLogs])

  // Main feed
  if (allContent.length > 0) {
    const rss = generateRss(config, allContent)
    writeFileSync(`./public/${page}`, rss)
  }

  // Per-tag feeds
  if (allContent.length > 0) {
    for (const tag of Object.keys(tagData)) {
      const filteredPosts = allContent.filter((post) =>
        post.tags.map((t) => slug(t)).includes(tag)
      )
      if (filteredPosts.length > 0) {
        const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`)
        const rssPath = path.join('public', 'tags', tag)
        mkdirSync(rssPath, { recursive: true })
        writeFileSync(path.join(rssPath, page), rss)
      }
    }
  }
}

const rss = () => {
  generateRSS(siteMetadata, allBlogs, allLogs)
  console.log('RSS feed generated...')
}
export default rss
