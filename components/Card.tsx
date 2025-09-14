'use client'

import { useEffect, useState } from 'react'
import Image from './Image'
import Link from './Link'
import { DevIcons } from './DevIcons'
import { FaGlobeAmericas, FaGithub } from 'react-icons/fa'

const Card = ({
  title,
  description,
  imgSrc,
  techStack,
  topics,
  languages,
  websiteURL,
  githubURL,
}) => {
  // to solve hydration mismatch error
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full max-w-[500px] p-4 md:w-1/2">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border-2 border-zinc-300 p-[6px] hover:border-black dark:border-zinc-700 hover:dark:border-white/90">
        {imgSrc && (
          <div className="max-h-[300px] flex-shrink-0">
            <Image
              alt={title}
              src={imgSrc}
              className="h-full w-full object-contain object-center"
              width={500}
              height={300}
            />
          </div>
        )}
        <div className="flex-grow p-3">
          <div className="mb-3 flex flex-wrap gap-2 align-baseline">
            {websiteURL && (
              <a
                href={websiteURL}
                aria-label="Website link"
                className="text-l flex items-center justify-center gap-2 rounded-md border border-blue-500 bg-white p-1 px-2 font-bold text-blue-500 hover:bg-gray-300"
              >
                Website
                <FaGlobeAmericas />
              </a>
            )}
            {githubURL && (
              <a
                href={githubURL}
                aria-label="GitHub link"
                className="text-l flex items-center justify-center gap-2 rounded-md border border-blue-500 bg-white p-1 px-2 font-bold text-blue-500 hover:bg-gray-300"
              >
                GitHub
                <FaGithub />
              </a>
            )}
          </div>
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <div className="mb-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className=":border-white inline-block rounded-md bg-gray-500 p-1 px-2 text-sm font-bold text-white md:text-base"
              >
                {topic}
              </span>
            ))}
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
        </div>
      </div>
    </div>
  )
}

export default Card
