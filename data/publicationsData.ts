interface Publication {
  title: string
  authors: string
  abstract: string
  venue: string
  imgSrc?: string
  arxivURL?: string
  pdfURL?: string
  websiteURL?: string
}

const publicationsData: Publication[] = [
  {
    title:
      'Pug: Photorealistic and semantically controllable synthetic data for representation learning',
    authors:
      'Florian Bordes, Shashank Shekhar, Mark Ibrahim, Diane Bouchacourt, Pascal Vincent, Ari Morcos',
    abstract: `Synthetic image datasets offer unmatched advantages for designing and evaluating deep neural networks: 
        they make it possible to (i) render as many data samples as needed, (ii) precisely control each scene and yield 
        granular ground truth labels (and captions), (iii) precisely control distribution shifts between training and 
        testing to isolate variables of interest for sound experimentation.Despite such promise, the use of synthetic 
        image data is still limited -- and often played down -- mainly due to their lack of realism. Most works therefore 
        rely on datasets of real images, which have often been scraped from public images on the internet, and may have 
        issues with regards to privacy, bias, and copyright, while offering little control over how objects precisely appear.
        In this work, we present a path to democratize the use of photorealistic synthetic data: we develop a new generation 
        of interactive environments for representation learning research, that offer both controllability and realism. 
        We use the Unreal Engine, a powerful game engine well known in the entertainment industry, to produce PUG 
        (Photorealistic Unreal Graphics) environments and datasets for representation learning. Using PUG for evaluation and 
        fine-tuning, we demonstrate the potential of PUG to both enable more rigorous evaluations and to improve model training.`,
    imgSrc: '/static/images/PUG.png',
    venue: 'Neural Information Processing Systems (NeurIPS 2023) Track on Datasets and Benchmark',
    websiteURL: 'https://pug.metademolab.com/',
    arxivURL: 'https://arxiv.org/abs/2308.03977',
    pdfURL: 'https://arxiv.org/pdf/2308.03977.pdf',
  },
]

export default publicationsData
