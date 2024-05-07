import Image from './Image'
import { FaFilePdf, FaGlobeAmericas } from 'react-icons/fa'
import { AiOutlineFile } from 'react-icons/ai'

const PublicationCard = ({
  title,
  authors,
  venue,
  abstract,
  imgSrc,
  arxivURL,
  pdfURL,
  websiteURL,
}) => {
  return (
    <div className="mx-auto my-4 flex w-full max-w-4xl overflow-hidden bg-white shadow-md dark:bg-gray-800">
      {imgSrc && (
        <div className="w-1/2">
          <Image
            alt={`Cover image for ${title}`}
            src={imgSrc}
            className="h-full w-full object-contain object-center"
            width={500}
            height={300}
          />
        </div>
      )}
      <div className="w-4/5 p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md text-gray-800 dark:text-gray-200">{authors}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{venue}</p>
        <div className="mt-4 flex justify-end space-x-4">
          {arxivURL && (
            <a href={arxivURL} aria-label="Arxiv link">
              <AiOutlineFile className="h-6 w-6 text-blue-500 hover:text-blue-600" />
            </a>
          )}
          {pdfURL && (
            <a href={pdfURL} aria-label="PDF link">
              <FaFilePdf className="h-6 w-6 text-red-500 hover:text-red-600" />
            </a>
          )}
          {websiteURL && (
            <a href={websiteURL} aria-label="Website link">
              <FaGlobeAmericas className="h-6 w-6 text-green-500 hover:text-green-600" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default PublicationCard
