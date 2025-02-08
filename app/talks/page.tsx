'use client'

import React, { useEffect, useRef, useState } from 'react'
import YearScrollspy from '@/components/ScrollSpy'
import talksData from '@/data/talksData'
import TalkCard from '@/components/TalkCard'

export default function Talks() {
  const [activeYear, setActiveYear] = useState<number | undefined>()
  const yearRefs = useRef<{ [key: number]: HTMLDivElement }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY
      const years = Object.keys(yearRefs.current)
        .map(Number)
        .sort((a, b) => b - a)

      let foundActiveYear = false
      for (let i = 0; i < years.length && !foundActiveYear; i++) {
        const year = years[i]
        const yearStart = yearRefs.current[year].offsetTop
        const yearEnd = yearStart + yearRefs.current[year].offsetHeight

        if (yearStart <= scrolledY && scrolledY <= yearEnd) {
          if (year !== activeYear) {
            setActiveYear(year)
            foundActiveYear = true
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeYear])

  const handleYearClick = (year: number) => {
    yearRefs.current[year].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const years = [...new Set(talksData.map((talk) => Number(talk.year)))].sort((a, b) => b - a)

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Talks
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A collection of my invited talks, presentations, workshops, and panel discussions. Click
            on the years to navigate.
          </p>
        </div>
      </div>

      <div className="relative flex">
        {/* Scroll Spy Container */}
        <div className="sticky">
          <YearScrollspy years={years} onYearClick={handleYearClick} activeYear={activeYear} />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow px-4 pl-2">
          <div className="relative pb-5">
            <div className="flex flex-wrap justify-center gap-0">
              {talksData.map((talk) => (
                <div
                  key={talk.title}
                  ref={(el) => {
                    if (!yearRefs.current[talk.year] && el) {
                      yearRefs.current[talk.year] = el
                    }
                  }}
                >
                  <TalkCard
                    title={talk.title}
                    venue={talk.venue}
                    year={talk.year}
                    summary={talk.summary}
                    imgSrc={talk.imgSrc}
                    youtubeURL={talk.youtubeURL}
                    slidesURL={talk.slidesURL}
                    githubURL={talk.githubURL}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
