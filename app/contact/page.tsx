'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect, useState } from 'react'
import consultingData from '@/data/consultingData'
import ConsultingCarousel from '@/components/ConsultingCarousel'

const sections = [
  {
    title: 'Career Advice: For Students and early-career Researchers/Engineers',
    description:
      'Looking for mentorship in ML/AI research? Book a call to discuss your research direction, career advice, or get feedback on your work.',
    namespace: 'mentorship',
    calLink30: 'sshekhar/career-guidance',
    calLink60: 'sshekhar/career-guidance-60',
  },
  {
    title: 'Technical Consulting: For Startups and Companies',
    description:
      "Need consulting on AI/ML projects? Let's discuss how I can help with your technical challenges and architecture decisions.",
    namespace: 'consulting',
    calLink30: 'sshekhar/tech-talk',
    calLink60: 'sshekhar/tech-talk-60',
  },
  {
    title: 'Due Diligence: For Investors & VCs (requires CC)',
    description:
      'Conducting due diligence on AI investments? I can provide expert insights on technical feasibility, market trends, and team evaluation.',
    namespace: 'investor',
    calLink30: 'sshekhar/due-diligence-30-min',
    calLink60: 'sshekhar/due-diligence-60-min',
  },
]

type Duration = 30 | 60

export default function Contact() {
  // Track duration selection per section
  const [durations, setDurations] = useState<Record<string, Duration>>(() =>
    sections.reduce(
      (acc, section) => {
        acc[section.namespace] = 30
        return acc
      },
      {} as Record<string, Duration>
    )
  )

  useEffect(() => {
    ;(async function () {
      // Initialize each Cal.com embed with its namespace
      for (const section of sections) {
        const cal = await getCalApi({ namespace: section.namespace })
        cal('ui', { hideEventTypeDetails: false })
      }
    })()
  }, [])

  const toggleDuration = (namespace: string) => {
    setDurations((prev) => ({
      ...prev,
      [namespace]: prev[namespace] === 30 ? 60 : 30,
    }))
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Contact
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          If you are a newcomer to the field of ML research and engineering, or a company looking to
          speak with me regarding consulting for a project, or an investor looking to gain insights
          from my technical expertise; I have set up separate calendar links below where you can
          book some time to speak with me.
        </p>
      </div>

      {/* Collapsible Sections */}
      <div className="space-y-4 py-8">
        {sections.map((section) => {
          const currentDuration = durations[section.namespace]
          const calLink = currentDuration === 30 ? section.calLink30 : section.calLink60

          return (
            <Disclosure key={section.title}>
              {({ open }) => (
                <div className="rounded-lg border border-gray-200 dark:border-gray-700">
                  <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-6 py-4 text-left text-lg font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700">
                    <span>{section.title}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-6 pt-4">
                    <p className="mb-4 text-gray-600 dark:text-gray-400">{section.description}</p>

                    {/* Duration Toggle */}
                    <div className="mb-6 flex items-center gap-2">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Duration:</span>
                      <div className="inline-flex rounded-lg border border-gray-300 dark:border-gray-600">
                        <button
                          onClick={() =>
                            currentDuration !== 30 && toggleDuration(section.namespace)
                          }
                          className={`px-4 py-2 text-sm font-medium transition-colors ${
                            currentDuration === 30
                              ? 'bg-primary-500 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                          } rounded-l-lg`}
                        >
                          30 min
                        </button>
                        <button
                          onClick={() =>
                            currentDuration !== 60 && toggleDuration(section.namespace)
                          }
                          className={`px-4 py-2 text-sm font-medium transition-colors ${
                            currentDuration === 60
                              ? 'bg-primary-500 text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                          } rounded-r-lg`}
                        >
                          60 min
                        </button>
                      </div>
                    </div>

                    <Cal
                      key={`${section.namespace}-${currentDuration}`}
                      namespace={section.namespace}
                      calLink={calLink}
                      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                      config={{ useSlotsViewOnSmallScreen: 'true' }}
                    />
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          )
        })}
      </div>

      {/* Past Engagements */}
      <div className="py-8">
        <h2 className="mb-6 text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          Past Engagements
        </h2>
        <ConsultingCarousel cards={consultingData} />
      </div>
    </div>
  )
}
