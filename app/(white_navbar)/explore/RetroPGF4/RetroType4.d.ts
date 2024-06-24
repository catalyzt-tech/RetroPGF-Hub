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

export interface SocialLinks {
  website: string[]
  farcaster: string[]
  twitter: string
  mirror: null | string
}

export interface GrantsAndFunding {
  ventureFunding: any[]
  grants: any[]
  revenue: any[]
}

export interface Github {
  githubLink: string
  star: number | null
  watch: number | null
  fork: number | null
  isFork: string
}

export interface iRetroPGF4Project {
  name: string
  description: string
  projectAvatarUrl: string
  proejctCoverImageUrl: string // Note: There's a typo here, consider correcting to `projectCoverImageUrl`
  category: string
  osoSlug: string
  socialLinks: SocialLinks
  team: string[]
  github: Github[]
  packages: any[]
  contracts: any[]
  grantsAndFunding: GrantsAndFunding
  eligibilityRules: string | null
  eigibilityRejectReason: string | null
  appealed: string | null
  appealDecision: string | null
  reason: null
  links: null
}
