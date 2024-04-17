export type ImpactCategory =
  | 'Developer Ecosystem'
  | 'End User Experience And Adoption'
  | 'Op Stack'
  | 'Collective Governance'

export type NewCategory =
  | 'OP Stack'
  | 'Collective Governance'
  | 'Developer Ecosystem'
  | 'End User Experience Adoption'

export interface ContributionLink {
  type: string
  url: string
  description: string
}

export interface ImpactMetric {
  description: string
  number: number
  url: string
}

export interface FundingSources {
  type: string
  currency: string
  amount: number
  description: string
}

export interface RetroRound3 {
  displayName: string
  projectId: string
  'Approval Attestation ID': string
  'Agora URL': string
  'West URL': string
  Approved: boolean
  applicantType: string
  websiteUrl: string
  bio: string
  contributionDescription: string
  contributionLinks: ContributionLink[]
  impactCategory: ImpactCategory[]
  impactDescription: string
  impactMetrics: ImpactMetric[]
  fundingSources: FundingSources[]
  payoutAddress: string
  metadataPtr: string
  chainId: number
  twitterHandle: string | null
  githubHandle: string
  'New Main-Category': NewCategory
  'Sub-category': string
  ballot: number
  median: number
  scaled: number
  rank: number
  iconPath: string
  bannerPath: string
}
