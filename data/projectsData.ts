import { TechStack } from '@/components/TechStack'
import { Topics } from '@/components/ProjectTopics'
import { Languages } from '@/components/Languages'

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  techStack: TechStack[]
  topics: Topics[]
  languages: Languages[]
}

const projectsData: Project[] = [
  {
    title: 'arXiv Redirector',
    description: `Arxiv Redirector streamlines your arXiv browsing by auto-redirecting external links 
    to your chosen default view: Abstract, PDF, or HTML. In case the HTML version is not available from
    arXiv, it will re-direct you to arXiv vanity automatically.`,
    imgSrc: '/static/images/arxiv-redirector-banner.jpg',
    href: 'https://github.com/sshkhr/arxiv-redirector',
    techStack: ['Chrome', 'Firefox'],
    topics: ['Frontend', 'Networking'],
    languages: ['JavaScript'],
  },
  {
    title: 'shashankStack',
    description: `Portfolio website and blog. Developed using NextJS, TailwindCSS, and TypeScript using the
    Tailwind Nextjs Starter Blog template (tailwind-nextjs-starter-blog.vercel.app).`,
    imgSrc: '/static/images/shashankStack.png',
    href: 'https://github.com/facebookresearch/PUG/tree/main/torchmultiverse',
    techStack: ['NextJS', 'React', 'TailwindCSS'],
    topics: ['Frontend', 'Fullstack'],
    languages: ['TypeScript'],
  },
  {
    title: 'Photorealistic Unreal Graphics (PUG)',
    description: `We use the Unreal Engine to create photorealistic interactive environments from which 
    we can easily sample images with given specifications. The synethetic data generated can be used to 
    train and evaluate machine learning models.`,
    imgSrc: '/static/images/PUG.png',
    href: 'https://pug.metademolab.com/',
    techStack: ['PyTorch', 'UnrealEngine'],
    topics: ['Machine Learning', 'Computer Vision', 'Computer Graphics'],
    languages: ['Python'],
  },
  {
    title: 'PyTorch Multiverse',
    description: `A python library based to query and generate datasets and dataloaders from various 
    environments such as Unreal Engine, Stable Diffusion used internally at Meta AI Research.
    Unreal Engine fork available publicly.`,
    imgSrc: '/static/images/TorchMultiverse.png',
    href: 'https://github.com/facebookresearch/PUG/tree/main/torchmultiverse',
    techStack: ['PyTorch', 'Git'],
    topics: ['Machine Learning', 'Data Engineering'],
    languages: ['Python'],
  },
]

export default projectsData
