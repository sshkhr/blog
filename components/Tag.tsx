import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-normal text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
