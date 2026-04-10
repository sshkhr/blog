import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Log } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { ReportView } from '@/components/Views'

interface LayoutProps {
  content: CoreContent<Log>
  children: ReactNode
  totalViews?: number
}

export default function LogLayout({ content, totalViews, children }: LayoutProps) {
  const { slug, date, title, tags, readingTime, draft } = content

  return (
    <SectionContainer>
      <article>
        <ReportView slug={slug} draft={draft} />
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm font-normal leading-6 text-gray-400 dark:text-gray-500">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                    <span className="mx-2">|</span>
                    <span>Views: {totalViews}</span>
                    <span className="mx-2">|</span>
                    {readingTime && <span>{readingTime.text}</span>}
                    {draft && (
                      <span className="mx-2">
                        | <span className="text-red-500">Draft</span>
                      </span>
                    )}
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              {tags && (
                <div className="flex flex-wrap justify-center gap-2 pt-4">
                  {tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              )}
            </div>
          </header>
          <div className="pb-8">
            <div className="prose pb-8 pt-10 dark:prose-invert">{children}</div>
          </div>
          <footer className="border-t border-gray-200 pt-6 dark:border-gray-700">
            <Link
              href="/logs"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              &larr; Back to Logs
            </Link>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
