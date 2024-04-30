'use client'

import { useState } from 'react'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
// import { genPageMetadata } from 'app/seo'
import { DevIcons } from '@/components/DevIcons'
import { TechStack, techStack as techStackArray } from '@/components/TechStack'

// export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  // State to hold the current filter
  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([])

  // Function to toggle tech stack selection
  const toggleTechStack = (stack: TechStack) => {
    setSelectedTechStacks((prev) => {
      if (prev.includes(stack)) {
        return prev.filter((s) => s !== stack)
      } else {
        return [...prev, stack]
      }
    })
  }

  // Filter projects based on the selected tech stacks
  const filteredProjects = projectsData.filter(
    (project) =>
      selectedTechStacks.length === 0 ||
      project.techStack.some((t) => selectedTechStacks.includes(t))
  )

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            I like to build things. Here are some of the things I've built.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            You can filter the projects by tech stack used by clicking on the corresponding buttons.
          </p>
          {/* Tech stack filter buttons with icons */}
          <div className="mb-5 flex flex-wrap gap-2">
            {techStackArray.map((stack) => {
              const isActive = selectedTechStacks.includes(stack)
              const IconComponent = DevIcons[stack] // Store the icon component
              const buttonClass = isActive
                ? 'bg-white text-black border-primary-700 bg-primary-700 hover:bg-gray-700' // Active state
                : 'bg-white text-black bg-black hover:bg-gray-700' // Inactive state
              return (
                <button
                  key={stack}
                  className={`flex items-center justify-center gap-2 rounded-md border p-1 px-2 text-sm font-bold ${buttonClass}`}
                  onClick={() => toggleTechStack(stack)}
                >
                  {stack}
                  {IconComponent && <IconComponent />}
                </button>
              )
            })}
          </div>
        </div>
        <div className="py-5">
          <div className="flex flex-wrap justify-center gap-8">
            {filteredProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                techStack={d.techStack}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
