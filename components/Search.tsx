'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { Priority } from 'kbar'

export const SearchProvider = ({ children, searchConfig }) => {
  const router = useRouter()

  const searchDocumentsPath = searchConfig?.kbarConfig?.searchDocumentsPath || 'search.json'

  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: searchDocumentsPath,
        onSearchDocumentsLoad(json) {
          const searchActions = json.map((item) => {
            const isProject = item.path.startsWith('projects/')
            if (isProject) {
              return {
                id: item.path,
                name: item.title,
                keywords: item.keywords,
                section: 'Projects',
                subtitle: item.subtitle,
                perform: () => router.push('/projects'),
              }
            } else {
              return {
                id: item.path,
                name: item.title,
                keywords: item.body?.raw || item.summary || '',
                section: 'Blog',
                subtitle: item.tags?.join(', ') || '',
                perform: () => router.push('/' + item.path),
              }
            }
          })

          // Sort by priority (this will ensure blogs appear first)
          console.log(searchActions)
          return searchActions //.sort((a, b) => (b.priority || 0) - (a.priority || 0))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
