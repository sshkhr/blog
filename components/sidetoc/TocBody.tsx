'use client'

import TOCInline from 'pliny/ui/TOCInline'
import useSidebarStore from './store'
import { Toc, TocItem as OriginalTocItem } from 'pliny/mdx-plugins/remark-toc-headings'

interface TocBodyProps {
  toc: Toc
}

interface TocItem extends OriginalTocItem {
  children?: TocItem[]
}

const filterToc = (toc: TocItem[]): TocItem[] => {
  return toc.map((item) => {
    const modifiedValue = item.url.replace(/-\d+$/, '')
    return {
      ...item,
      url: modifiedValue,
    }
  })
}

const TocBody = ({ toc }: TocBodyProps) => {
  const { sidebarOpen } = useSidebarStore()

  if (!sidebarOpen) {
    return null
  }

  const filteredToc = filterToc(toc as TocItem[])

  return (
    <div className="fixed left-0 top-0 z-50 h-screen md:flex">
      <div className="sticky left-0 top-0 z-50 flex h-screen w-64 flex-col overflow-y-auto bg-gray-100 px-2 py-4 dark:bg-gray-800">
        <div className="mb-20 mt-20">
          <div className="text-xl font-bold text-heading-400">Table of Contents</div>
          <div className="my-auto mt-5 overflow-y-auto">
            <TOCInline
              toc={filteredToc}
              ulClassName="space-y-2 overflow-y-auto my-auto text-primary-500"
              liClassName="pl-3 hover:text-heading-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TocBody
