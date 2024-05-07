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
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Here is a list of my research publications.
          </p>
          {/* Tech stack filter buttons with icons */}
          {/* Dropdowns for filtering */}
        </div>
        <div className="w-full py-5">
          <div className="flex flex-wrap justify-center gap-0">
            {projectsData.map((d) => (
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
