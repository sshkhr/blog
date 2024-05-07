'use client'

import { useEffect, useState } from 'react'
import Image from './Image'
import Link from './Link'
import { DevIcons } from './DevIcons'

const Card = ({ title, description, imgSrc, href, techStack, topics, languages }) => {
  // to solve hydration mismatch error
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <a href={href} className="w-full max-w-[500px] p-4 md:w-1/2">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-zinc-300 p-[6px] hover:border-black dark:border-zinc-700 hover:dark:border-white/90">
        {imgSrc && (
          <div className="flex-shrink-0">
            <Image
              alt={title}
              src={imgSrc}
              className="w-full object-cover object-center"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="flex-grow p-3">
          <div className="mb-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="mb-2 mr-2 inline-block rounded-md bg-gray-300 px-3 py-1 text-sm font-bold text-white md:text-base"
              >
                {topic}
              </span>
            ))}
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {languages.map((t) => {
              const Icon = DevIcons[t]
              return (
                <div
                  key={t}
                  className=":border-white flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 text-sm font-bold text-white md:text-base"
                >
                  {t}
                  <div>
                    <Icon />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mb-5 flex flex-wrap gap-2">
            {techStack.map((t) => {
              const Icon = DevIcons[t]
              return (
                <div
                  key={t}
                  className=":border-white flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 text-sm font-bold text-white md:text-base"
                >
                  {t}
                  <div>
                    <Icon />
                  </div>
                </div>
              )
            })}
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
          <p className="prose max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <Link
            href={href}
            className="mt-auto text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        </div>
      </div>
    </a>
  )
}

export default Card
