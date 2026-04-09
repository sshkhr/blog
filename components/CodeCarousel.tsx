'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

interface CodeCarouselItem {
  label: string
  href?: string
  image?: string
  code?: string
}

interface CodeCarouselProps {
  items: CodeCarouselItem[]
  autoPlayInterval?: number
}

export default function CodeCarousel({ items, autoPlayInterval = 3000 }: CodeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrentIndex(index)
      setTimeout(() => setIsAnimating(false), 300)
    },
    [isAnimating]
  )

  const goToPrevious = useCallback(() => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }, [currentIndex, items.length, goToSlide])

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }, [currentIndex, items.length, goToSlide])

  // Auto-advance
  useEffect(() => {
    if (isPaused) return
    timerRef.current = setInterval(goToNext, autoPlayInterval)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [goToNext, autoPlayInterval, isPaused])

  const item = items[currentIndex]

  return (
    <div
      className="relative my-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide */}
      <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
        {/* Label bar */}
        <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {item.label}
              </a>
            ) : (
              item.label
            )}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* Content */}
        <div
          className="transition-opacity duration-300 ease-in-out"
          style={{ opacity: isAnimating ? 0.5 : 1 }}
        >
          {item.image && (
            <div className="relative flex justify-center bg-white p-2 dark:bg-gray-900">
              <Image
                src={item.image}
                alt={item.label}
                width={600}
                height={256}
                className="max-h-64 rounded object-contain"
              />
            </div>
          )}
          {item.code && (
            <div className="overflow-x-auto">
              <pre className="m-0 rounded-none border-0 bg-gray-900 p-4 text-sm leading-relaxed text-gray-100">
                <code>{item.code}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Previous example"
      >
        <ChevronLeftIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-1.5 shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Next example"
      >
        <ChevronRightIcon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dot Indicators */}
      <div className="mt-3 flex justify-center gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-primary-500'
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            aria-label={`Go to example ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
