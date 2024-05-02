'use client'

import { useState } from 'react'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
// import { genPageMetadata } from 'app/seo'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  cn,
} from '@nextui-org/react'
import { DevIcons } from '@/components/DevIcons'
import { TechStack, techStackArray } from '@/components/TechStack'
import { Topics, topicsArray } from '@/components/ProjectTopics'
import { Languages, languageArray } from '@/components/Languages'

// export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  /// States to hold the current filters
  const [selectedTechStacks, setSelectedTechStacks] = useState<TechStack[]>(techStackArray)
  const [selectedTopics, setSelectedTopics] = useState<Topics[]>(topicsArray)
  const [selectedLanguages, setSelectedLanguages] = useState<Languages[]>(languageArray)

  // Function to toggle tech stack selection
  const toggleTechStackSelection = (keys: Set<TechStack>) => {
    // Convert set of keys to an array
    const selectedKeys = Array.from(keys)
    setSelectedTechStacks(selectedKeys)
  }

  // Function to toggle topic selection
  const toggleTopicSelection = (keys: Set<Topics>) => {
    // Convert set of keys to an array
    const selectedKeys = Array.from(keys)
    setSelectedTopics(selectedKeys)
  }

  // Function to toggle language selection
  const toggleLanguageSelection = (keys: Set<Languages>) => {
    // Convert set of keys to an array
    const selectedKeys = Array.from(keys)
    setSelectedLanguages(selectedKeys)
  }

  // Filter projects based on the selected tech stacks and topics
  const filteredProjects = projectsData.filter(
    (project) =>
      (selectedTechStacks.length === 0 ||
        project.techStack.some((t) => selectedTechStacks.includes(t))) &&
      (selectedTopics.length === 0 || project.topics.some((t) => selectedTopics.includes(t)))
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
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="font-bold capitalize">
                  {'Topic'}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Customizable multiple selection dropdown"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedTopics}
                onSelectionChange={toggleTopicSelection}
              >
                {topicsArray.map((item, index) => (
                  <DropdownItem key={index}>{item}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  {'Tech Stack'}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Customizable multiple selection dropdown"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedTechStacks}
                onSelectionChange={toggleTechStackSelection}
              >
                {techStackArray.map((item, index) => {
                  const Icon = DevIcons[item]
                  return (
                    <DropdownItem key={index} startContent={<Icon />}>
                      {item}
                    </DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered" className="capitalize">
                  {'Language'}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Customizable multiple selection dropdown"
                variant="flat"
                closeOnSelect={false}
                disallowEmptySelection
                selectionMode="multiple"
                selectedKeys={selectedLanguages}
                onSelectionChange={toggleLanguageSelection}
              >
                {languageArray.map((item, index) => {
                  const Icon = DevIcons[item]
                  return (
                    <DropdownItem key={index} startContent={<Icon />}>
                      {item}
                    </DropdownItem>
                  )
                })}
              </DropdownMenu>
            </Dropdown>
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
                topics={d.topics}
                languages={d.languages}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
