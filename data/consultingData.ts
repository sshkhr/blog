export type CardType = 'project' | 'testimonial'

export interface ConsultingCard {
  type: CardType
  industry: string

  // Project-specific fields
  companyType?: string
  valuation?: string
  projectScope?: string

  // Testimonial-specific fields (for future use)
  quote?: string
  personName?: string
  personRole?: string
  companyName?: string
  companyUrl?: string
}

const consultingData: ConsultingCard[] = [
  {
    type: 'project',
    industry: 'FinTech',
    companyType: 'Seed YC Startup, $30M valuation',
    valuation: '2025',
    projectScope:
      'Oversaw the development of a deep research and semantic citation system for core RAG application serving 1000+ concurrent users with 10M+ document knowledge base. The citation system was optimized for latency and accuracy, and lead to +40% user signups MoM for Q4 2025.',
  },
  {
    type: 'project',
    industry: 'Enterprise LLMs',
    companyType: 'Series D, $5-10B valuation',
    valuation: '2024-25',
    projectScope:
      'Built synthetic data pipelines for both post-training and evaluation infrastructure for training large language (LLM) and multimodal models up to 8B in scale.',
  },
  {
    type: 'project',
    industry: 'Broadcasting',
    companyType: 'Private Corporation',
    valuation: '2025',
    projectScope:
      'Advised a team of 2 MLEs and 1 backend engineer in developing real-time (<500ms latency) speech recognition, and to integrate it into their human-in-the-loop closed captioning system',
  },
  {
    type: 'project',
    industry: 'Climate Tech',
    companyType: 'Pre-Seed Startup, $5-10M valuation',
    valuation: '2021',
    projectScope:
      'Built data ingestion pipeline for large satellite images into their ML training pipeline',
  },
  {
    type: 'project',
    industry: 'AI Safety',
    companyType: 'Seed Startup, $2.1M',
    valuation: '2021',
    projectScope: 'Interpretability and PII law compliance',
  },
]

export default consultingData
