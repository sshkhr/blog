import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import dynamic from 'next/dynamic'

// 1. Dynamically import the actual CodeTabs component (to avoid SSR)
const CodeTabs = dynamic(() => import('@/components/CodeTabs'), {
  ssr: false,
})

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  CodeTabs,
}
