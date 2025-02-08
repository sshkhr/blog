import Image from './Image'
import { FaYoutube, FaSlideshare, FaGithub } from 'react-icons/fa'

const TalkCard = ({ title, venue, year, summary, imgSrc, youtubeURL, slidesURL, githubURL }) => {
  return (
    <div className="relative mx-auto mb-8 flex w-full max-w-4xl flex-col overflow-hidden rounded-xl border-2 border-zinc-300 bg-white shadow-md dark:border-zinc-700 dark:bg-gray-800 lg:flex-row">
      {imgSrc && (
        <div className="flex w-full items-center justify-center p-4 lg:w-1/3">
          <Image
            alt={`Cover image for ${title}`}
            src={imgSrc}
            className="h-full w-auto object-contain object-center"
            width={300}
            height={200}
            style={{ maxHeight: '150px' }}
          />
        </div>
      )}
      <div className="flex w-full flex-col justify-between p-4 lg:w-2/3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="text-md text-gray-800 dark:text-gray-200">
            {venue}, {year}
          </p>
          {summary && <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{summary}</p>}
        </div>

        <div className="mb-2 mt-4 flex flex-wrap gap-2">
          {youtubeURL && (
            <a
              href={youtubeURL}
              aria-label="YouTube recording"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              Recording
              <FaYoutube />
            </a>
          )}
          {slidesURL && (
            <a
              href={slidesURL}
              aria-label="Presentation slides"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              Slides
              <FaSlideshare />
            </a>
          )}
          {githubURL && (
            <a
              href={githubURL}
              aria-label="GitHub repository"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              GitHub
              <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default TalkCard
