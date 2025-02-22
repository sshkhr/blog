'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children, searchConfig }) => {
  const router = useRouter()

  const searchDocumentsPath = searchConfig?.kbarConfig?.searchDocumentsPath || 'search.json'

  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: searchDocumentsPath,
        onSearchDocumentsLoad(json) {
          return json.map((post: Blog) => ({
            id: post.path,
            name: post.title,
            keywords: post.body.raw,
            section: 'Blog',
            subtitle: post.tags.join(', '),
            perform: () => router.push('/' + post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
