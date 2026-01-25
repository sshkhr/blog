'use client'

import { useState, useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import type { ConsultingCard } from '@/data/consultingData'

interface ConsultingCarouselProps {
  cards: ConsultingCard[]
}

function ProjectCard({ card }: { card: ConsultingCard }) {
  return (
    <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Industry Tag */}
      <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300">
        {card.industry}
      </span>

      {/* Company Info */}
      <div className="mt-4 space-y-1">
        <p className="font-semibold text-gray-900 dark:text-gray-100">{card.companyType}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{card.valuation}</p>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100 dark:border-gray-700" />

      {/* Project Scope */}
      <p className="text-gray-600 dark:text-gray-300">{card.projectScope}</p>
    </div>
  )
}

function TestimonialCard({ card }: { card: ConsultingCard }) {
  return (
    <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      {/* Industry Tag */}
      <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300">
        {card.industry}
      </span>

      {/* Quote */}
      <blockquote className="mt-4 text-gray-600 dark:text-gray-300">
        &ldquo;{card.quote}&rdquo;
      </blockquote>

      {/* Divider */}
      <div className="my-4 border-t border-gray-100 dark:border-gray-700" />

      {/* Person Info */}
      <div>
        <p className="font-semibold text-gray-900 dark:text-gray-100">{card.personName}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {card.personRole},{' '}
          {card.companyUrl ? (
            <a
              href={card.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              {card.companyName}
            </a>
          ) : (
            card.companyName
          )}
        </p>
      </div>
    </div>
  )
}

export default function ConsultingCarousel({ cards }: ConsultingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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
    const newIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }, [currentIndex, cards.length, goToSlide])

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }, [currentIndex, cards.length, goToSlide])

  const currentCard = cards[currentIndex]
  const nextIndex = (currentIndex + 1) % cards.length
  const nextCard = cards[nextIndex]

  return (
    <div className="relative">
      {/* Cards Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 px-2 py-4">
          {/* Current Card - takes most of the width */}
          <div
            className="w-[85%] flex-shrink-0 transition-transform duration-300 ease-in-out"
            style={{
              transform: isAnimating ? 'translateX(-10px)' : 'translateX(0)',
            }}
          >
            {currentCard.type === 'project' ? (
              <ProjectCard card={currentCard} />
            ) : (
              <TestimonialCard card={currentCard} />
            )}
          </div>

          {/* Next Card Preview - shows a peek */}
          <div
            className="w-[15%] flex-shrink-0 cursor-pointer opacity-50 transition-opacity duration-300 hover:opacity-70"
            onClick={goToNext}
          >
            <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <span className="inline-block rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900 dark:text-primary-300">
                {nextCard.industry}
              </span>
              <p className="mt-2 truncate text-sm font-semibold text-gray-900 dark:text-gray-100">
                {nextCard.companyType}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      <button
        onClick={goToNext}
        className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dot Indicators */}
      <div className="mt-4 flex justify-center gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full border-2 transition-colors ${
              index === currentIndex
                ? 'border-primary-500 bg-primary-500'
                : 'border-gray-400 bg-transparent hover:border-primary-400 dark:border-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
