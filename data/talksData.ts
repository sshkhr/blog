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
    title: "A Practitioner's Guide to Safeguarding Your LLM Applications",
    venue: 'Toronto Machine Learning Summit',
    year: 2024,
    imgSrc: '/static/images/talks/tmls-logo.png',
    youtubeURL:
      'https://www.youtube.com/watch?v=NMYIj1U8DRM&list=PLH-rpi_agJT0MJXa0CkH8-coE7NfqEUo1&index=6&t=3887s',
    slidesURL:
      'https://docs.google.com/presentation/d/1mpyrzLCw1aqfBZtVxVJhBcnDp4iCgL0Woo4YcNa1yaM/',
    githubURL: 'https://github.com/sshkhr/safeguarding-llms',
    summary:
      'Conducted workshop to explore safeguarding of Large Language Models (LLMs) in production for data scientists, researchers, and CTOs.',
  },
  {
    title: 'Implementing Structure Mapping in Deep Learning Models for Abstract Reasoning',
    venue: 'Analogical Minds Seminar Spring',
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
