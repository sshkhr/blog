interface Talk {
  title: string
  venue: string
  year: number
  imgSrc?: string
  youtubeURL?: string
  slidesURL?: string
  githubURL?: string
  summary: string
}

const talksData: Talk[] = [
  {
    title: 'Case Study: How Does DeepSeek’s FlashMLA Speed up Inference',
    venue: 'Toronto Machine Learning Summit',
    year: 2025,
    imgSrc: '/static/images/talks/tmls-logo.png',
    youtubeURL: 'https://www.youtube.com/watch?v=KnaT7utCvl8',
    slidesURL:
      'https://docs.google.com/presentation/d/1r8hnsOp6EOYgkhmn-hlJLwXLqvPiIyVEZHtyQzdoWUU/edit?usp=sharing',
    summary:
      'Gave a talk in the Inference Scaling track on how the Flash Multi-Head Latent Attention algorithm for NVIDIA Hopper GPUs works.',
  },
  {
    title:
      'Scaling Large Language Models: Getting Started with Large-Scale Parallel Training of LLMs',
    venue: 'TMLS Workshop',
    year: 2025,
    imgSrc: '/static/images/talks/tmls-logo.png',
    youtubeURL: 'https://www.youtube.com/watch?v=wC_2dO2lKWk',
    githubURL: 'https://github.com/sshkhr/MinText',
    summary:
      'Gave a talk in the Inference Scaling track on how the Flash Multi-Head Latent Attention algorithm for NVIDIA Hopper GPUs works.',
  },
  {
    title: "A Practitioner's Guide to Safeguarding Your LLM Applications",
    venue: 'Toronto Machine Learning Summit',
    year: 2024,
    imgSrc: '/static/images/talks/tmls-logo.png',
    youtubeURL: 'https://www.youtube.com/watch?v=NMYIj1U8DRM',
    slidesURL:
      'https://docs.google.com/presentation/d/1mpyrzLCw1aqfBZtVxVJhBcnDp4iCgL0Woo4YcNa1yaM/',
    githubURL: 'https://github.com/sshkhr/safeguarding-llms',
    summary:
      'Conducted workshop to explore safeguarding of Large Language Models (LLMs) in production for data scientists, researchers, and CTOs.',
  },
  {
    title: 'Implementing Structure Mapping in Deep Learning Models for Abstract Reasoning',
    venue: 'Analogical Minds Seminar Spring Series',
    year: 2022,
    imgSrc: '/static/images/talks/analogy-logo.png',
    youtubeURL: 'https://www.youtube.com/watch?v=v5al6mJKrHQ',
    summary:
      'Presented seminar on my paper Neural Structure Mapping (NSM) for systematic analogical reasoning to an audience of cognitive scientists, psychologists, and computer scientists.',
  },
  {
    title: 'Breaking into AI: Industry Speaker Panel',
    venue: 'University of Toronto Machine Intelligence Unit Panel',
    year: 2021,
    imgSrc: '/static/images/talks/utmist-logo.svg',
    youtubeURL: 'https://www.youtube.com/watch?v=y_JF5-adrCY&t=243s',
    slidesURL: 'https://utmist.gitlab.io/events/breaking-into-ai/',
    summary:
      'Appeared on a panel to educate University of Toronto undergraduate students about the different career avenues available to pursue within Artificial Intelligence',
  },
]

export default talksData
