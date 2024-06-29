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
  openSourceResult: string
  openSourceRejectComment: string
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
  eligibilityReview: {
    isEligibilityResultStatus: boolean
    eligibilityRules: null | any // Specify the type if eligibilityRules have a defined structure
    eligibilityRejectReason: null | string
    appealed: null | boolean
    appealDecision: null | string
    reason: null | string
    links: null | any // Specify the type if links have a defined structure
  }
  applicationReview: {
    isApplicationReviewApproved: boolean
    applicationRejectReason: null | string
    appealed: boolean
    appealStatement: null | string
    appealDecision: null | string
  }
  isEligibleFinal: boolean
}
