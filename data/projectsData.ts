import { TechStack } from '@/components/TechStack'
import { Topics } from '@/components/ProjectTopics'
import { Languages } from '@/components/Languages'

interface Project {
  title: string
  description: string
  imgSrc?: string
  techStack: TechStack[]
  topics: Topics[]
  languages: Languages[]
  githubURL?: string
  websiteURL?: string
}

const projectsData: Project[] = [
  {
    title: 'arXiv Redirector',
    description: `Arxiv Redirector streamlines your arXiv browsing by auto-redirecting external links 
    to your chosen default view: Abstract, PDF, or HTML. In case the HTML version is not available from
    arXiv, it will re-direct you to arXiv vanity automatically.`,
    imgSrc: '/static/images/arxiv-redirector-banner.jpg',
    techStack: ['Chrome', 'Firefox'],
    topics: ['Frontend', 'Networking'],
    languages: ['JavaScript'],
    githubURL: 'https://github.com/sshkhr/arxiv-redirector',
    websiteURL:
      'https://chromewebstore.google.com/detail/arxiv-redirector/hecgofkjilgbdgcmlbbjcckfgacphbgj',
  },
  {
    title: 'shashankStack',
    description: `Portfolio website and blog. Developed using NextJS, TailwindCSS, and TypeScript using the
    Tailwind Nextjs Starter Blog template (tailwind-nextjs-starter-blog.vercel.app).`,
    imgSrc: '/static/images/shashankStack.png',
    techStack: ['NextJS', 'React', 'TailwindCSS'],
    topics: ['Frontend', 'Fullstack'],
    languages: ['TypeScript'],
    githubURL: 'https://github.com/sshkhr/blog',
    websiteURL: 'https://shashankshekhar.vercel.app/',
  },
  {
    title: 'Photorealistic Unreal Graphics (PUG)',
    description: `We use the Unreal Engine to create photorealistic interactive environments from which 
    we can easily sample images with given specifications. The synethetic data generated can be used to 
    train and evaluate machine learning models.`,
    imgSrc: '/static/images/PUG.png',
    techStack: ['PyTorch', 'UnrealEngine'],
    topics: ['Computer Vision', 'Computer Graphics'],
    languages: ['Python'],
    githubURL: 'https://github.com/facebookresearch/PUG',
    websiteURL: 'https://pug.metademolab.com/',
  },
  {
    title: 'PyTorch Multiverse',
    description: `A python library based to query and generate datasets and dataloaders from various 
    environments such as Unreal Engine, Stable Diffusion used internally at Meta AI Research.
    Unreal Engine fork available publicly.`,
    imgSrc: '/static/images/TorchMultiverse.png',
    techStack: ['PyTorch', 'Git'],
    topics: ['Machine Learning', 'Data Engineering'],
    languages: ['Python'],
    githubURL: 'https://github.com/facebookresearch/PUG/tree/main/torchmultiverse',
  },
]

export default projectsData
