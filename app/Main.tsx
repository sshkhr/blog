import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="mt-7 justify-between space-y-4">
        <div className="flex flex-col md:flex-row">
          <div id="div1" className="mb-4 text-left md:mb-0 md:basis-1/2">
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-none md:text-5xl md:leading-tight lg:text-6xl lg:leading-none">
              hi, <span>i'm </span>
              <span className="whitespace-nowrap text-primary-500 dark:text-primary-300">
                shashank shekhar
              </span>
            </h1>
            <div className="prose mt-4 max-w-full text-gray-500 dark:text-gray-400 sm:max-w-xl sm:text-lg md:max-w-2xl md:text-xl lg:text-2xl">
              <p>
                I do machine learning research and engineering. This website is my place to talk
                about about <a href="/research">ML</a>,{' '}
                <a href="https://www.dice.health/">startups</a>, interesting{' '}
                <a href="/projects">projects</a>, <a href="/blog">writing</a>, and learning.
                Speaking of which, you can learn more <a href="/about">about me</a> here.
              </p>
            </div>
          </div>
          <div className="ml-2 flex flex-col md:basis-1/2">
            <div id="div2" className="mb-4 flex items-center justify-center">
              <div className="min-w-48">
                <Image
                  src={'/static/images/shashank.jpg'}
                  alt="avatar"
                  width={192}
                  height={192}
                  className="h-48 w-48 rounded-full"
                />
              </div>
            </div>
            <div id="div3" className="text-center">
              {siteMetadata.newsletter?.provider && (
                <div className="flex items-center justify-center pt-4">
                  <NewsletterForm title="Get new posts straight to your inbox" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 pt-2 dark:divide-gray-700">
        <div className="mt-4 space-y-2 pb-2 pt-6 md:mt-0 md:space-y-4">
          <h2 className="text-2xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-none md:text-4xl md:leading-none">
            Latest Posts
          </h2>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My blog on human (mostly mine) and machine learning.
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-4">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 rounded-lg hover:lg:bg-gray-100 hover:lg:dark:bg-zinc-800/90 xl:col-span-3 xl:-ml-6 xl:p-4">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-bold leading-8  tracking-tight md:text-2xl">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-800 underline-offset-4 hover:underline dark:text-gray-100 hover:dark:text-green-400"
                            >
                              <div>{title}</div>
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
