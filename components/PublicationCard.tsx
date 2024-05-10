import Image from './Image'
import { FaFilePdf, FaGlobeAmericas, FaGithub, FaDatabase, FaTrophy } from 'react-icons/fa'
import { SiArxiv } from 'react-icons/si'

const PublicationCard = ({
  title,
  authors,
  venue,
  abstract,
  imgSrc,
  arxivURL,
  pdfURL,
  websiteURL,
  githubURL,
  dataURL,
  award,
}) => {
  return (
    <div className="relative mx-auto mb-8 flex w-full max-w-4xl flex-col overflow-hidden rounded-xl border-2 border-zinc-300 bg-white shadow-md dark:border-zinc-700 dark:bg-gray-800 lg:flex-row">
      {imgSrc && (
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <Image
            alt={`Cover image for ${title}`}
            src={imgSrc}
            className="h-full w-auto object-contain object-center"
            width={500}
            height={300}
            style={{ maxHeight: '200px' }} // Fixed height
          />
        </div>
      )}
      <div className="w-full p-4 lg:w-4/5">
        {award && (
          <div className="absolute bottom-0 right-0 m-2 flex items-center text-red-500">
            <FaTrophy className="mr-2" />
            <span>{award}</span>
          </div>
        )}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md text-gray-800 dark:text-gray-200">{authors}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{venue}</p>
        <div className="mb-5 mt-4 flex flex-wrap gap-2">
          {arxivURL && (
            <a
              href={arxivURL}
              aria-label="Arxiv link"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              arXiv
              <SiArxiv />
            </a>
          )}
          {pdfURL && (
            <a
              href={pdfURL}
              aria-label="PDF link"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              PDF
              <FaFilePdf />
            </a>
          )}
          {websiteURL && (
            <a
              href={websiteURL}
              aria-label="Website link"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              Website
              <FaGlobeAmericas />
            </a>
          )}
          {githubURL && (
            <a
              href={githubURL}
              aria-label="GitHub link"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              GitHub
              <FaGithub />
            </a>
          )}
          {dataURL && (
            <a
              href={dataURL}
              aria-label="Data link"
              className="text-md flex items-center justify-center gap-2 rounded-md border bg-gray-500 p-1 px-2 font-bold text-white hover:bg-gray-600"
            >
              Dataset
              <FaDatabase />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PublicationCard
