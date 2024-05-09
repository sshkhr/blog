import publicationsData from '@/data/publicationsData'
import PublicationCard from '@/components/PublicationCard'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

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
            {publicationsData.map((d) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
