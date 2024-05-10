'use client'

import React, { useEffect, useRef, useState } from 'react'
import YearScrollspy from '@/components/ScrollSpy'
import publicationsData from '@/data/publicationsData'
import PublicationCard from '@/components/PublicationCard'

export default function Research() {
  const [activeYear, setActiveYear] = useState<number | undefined>()
  const yearRefs = useRef<{ [key: number]: HTMLDivElement }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrolledY = window.scrollY + window.innerHeight / 2 // Middle of the screen
      const years = Object.keys(yearRefs.current)
        .map(Number)
        .sort((a, b) => b - a) // Convert keys to numbers and sort
      for (let i = 0; i < years.length; i++) {
        const year = years[i]
        if (yearRefs.current[year].offsetTop <= scrolledY) {
          if (year !== activeYear) {
            setActiveYear(year)
            break
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

  const years = [...new Set(publicationsData.map((d) => Number(d.year)))].sort((a, b) => b - a) // Convert years to numbers

  return (
    <div className="relative flex">
      {/* Main Content Area */}
      <div className="flex-grow p-4">
        <div className="space-y-2 pb-8 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl md:text-6xl">
            Research
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            Here is a list of my research publications.
          </p>
        </div>
        <div className="py-5">
          <div className="flex flex-wrap justify-center gap-4">
            {publicationsData.map((d, index) => (
              <div
                key={d.title}
                ref={(el) => {
                  if (!yearRefs.current[d.year] && el) {
                    yearRefs.current[d.year] = el
                  }
                }}
              >
                <PublicationCard
                  key={d.title}
                  title={d.title}
                  venue={d.venue}
                  authors={d.authors}
                  abstract={d.abstract}
                  imgSrc={d.imgSrc}
                  arxivURL={d.arxivURL}
                  pdfURL={d.pdfURL}
                  websiteURL={d.websiteURL}
                  githubURL={d.githubURL}
                  dataURL={d.dataURL}
                  award={d.award}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Spy Container */}
      <div className="ml-0 mt-20 sticky left-0 top-0">
        <YearScrollspy years={years} onYearClick={handleYearClick} />
      </div>
    </div>
  )
}
