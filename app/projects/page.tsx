'use client'

import { useState } from 'react'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
// import { genPageMetadata } from 'app/seo'
import Select from 'react-select'
import { DevIcons } from '@/components/DevIcons'
import { TechStack, techStackArray } from '@/components/TechStack'
import { Topics, topicsArray } from '@/components/ProjectTopics'
import { Languages, languageArray } from '@/components/Languages'

// export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  /// States to hold the current filters
  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>([])
  const [selectedTopics, setSelectedTopics] = useState<Topics[]>([])
  const [selectedLanguages, setSelectedLanguages] = useState<Languages[]>([])

  // Generate options from the topicArray
  const techstackoptions = techStackArray.map((techstack) => ({
    value: techstack,
    label: techstack.toString(),
  }))

  // Function to toggle tech stack selection
  const toggleTechStackSelection = (selected) => {
    // Convert set of keys to an array
    const values = selected ? selected.map((option) => option.value) : []
    setSelectedTechStacks(values)
  }

  // Generate options from the topicArray
  const topicoptions = topicsArray.map((topic) => ({
    value: topic,
    label: topic.toString(),
  }))

  // Function to toggle topic selection
  const toggleTopicSelection = (selected) => {
    // Convert set of keys to array
    const values = selected ? selected.map((option) => option.value) : []
    setSelectedTopics(values)
  }

  // Generate options from the languageArray
  const languageoptions = languageArray.map((language) => ({
    value: language,
    label: language.toString(),
  }))

  // Function to toggle language selection
  const toggleLanguageSelection = (selected) => {
    // Convert set of keys to array
    const values = selected ? selected.map((option) => option.value) : []
    setSelectedLanguages(values)
  }

  // Filter projects based on the selected tech stacks and topics
  const filteredProjects = projectsData.filter(
    (project) =>
      (selectedTechStacks.length === 0 ||
        project.techStack.some((t) => selectedTechStacks.includes(t))) &&
      (selectedTopics.length === 0 || project.topics.some((t) => selectedTopics.includes(t))) &&
      (selectedLanguages.length === 0 ||
        project.languages.some((t) => selectedLanguages.includes(t)))
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
          {/* Tech stack filter buttons with icons */}
          {/* Dropdowns for filtering */}
          <div className="mb-5 flex flex-col content-center gap-4 text-gray-500 dark:text-gray-400 md:flex-row">
            <Select
              isMulti
              name="Topic"
              options={topicoptions}
              defaultValue={[]}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={toggleTopicSelection}
              value={topicoptions.filter((option) => selectedTopics.includes(option.value))}
              placeholder="Filter by Topic..."
            />
            <Select
              isMulti
              name="Language"
              options={languageoptions}
              defaultValue={[]}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={toggleLanguageSelection}
              value={languageoptions.filter((option) => selectedLanguages.includes(option.value))}
              placeholder="Filter By Language..."
            />
            <Select
              isMulti
              name="Tech Stack"
              options={techstackoptions}
              defaultValue={[]}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={toggleTechStackSelection}
              value={techstackoptions.filter((option) => selectedTechStacks.includes(option.value))}
              placeholder="Filter By Tech Stack..."
            />
          </div>
        </div>
        <div className="w-full py-5">
          <div className="flex flex-wrap justify-center gap-0">
            {filteredProjects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                techStack={d.techStack}
                topics={d.topics}
                languages={d.languages}
                websiteURL={d.websiteURL}
                githubURL={d.githubURL}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
