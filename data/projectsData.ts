import { TechStack } from '@/components/TechStack'

interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  techStack: TechStack[]
}

const projectsData: Project[] = [
  {
    title: 'Photorealistic Unreal Graphics (PUG)',
    description: `We use the Unreal Engine to create photorealistic interactive environments from which 
    we can easily sample images with given specifications. The synethetic data generated can be used to 
    train and evaluate machine learning models.`,
    imgSrc: '/static/images/PUG.png',
    href: 'https://pug.metademolab.com/',
    techStack: ['Python', 'PyTorch', 'UnrealEngine'],
  },
  {
    title: 'PyTorch Multiverse',
    description: `A python library based to query and generate datasets and dataloaders from various 
    environments such as Unreal Engine, Stable Diffusion used internally at Meta AI Research.
    Unreal Engine fork available publicly.`,
    imgSrc: '/static/images/TorchMultiverse.png',
    href: 'https://github.com/facebookresearch/PUG/tree/main/torchmultiverse',
    techStack: ['Python', 'PyTorch', 'Git'],
  },
]

export default projectsData
