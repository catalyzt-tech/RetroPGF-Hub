import { isOpenSource } from './_component/Text'
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
export interface ImpactMetrics {
  project_name: string
  application_id: string
  is_oss: boolean
  gas_fees: number
  transaction_count: number
  trusted_transaction_count: number
  trusted_transaction_share: number
  trusted_users_onboarded: number
  daily_active_addresses: number
  trusted_daily_active_users: number
  monthly_active_addresses: number
  trusted_monthly_active_users: number
  recurring_addresses: number
  trusted_recurring_users: number
  power_user_addresses: number
  openrank_trusted_users_count: number
  log_gas_fees: number
  log_transaction_count: number
  log_trusted_transaction_count: number
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
    appealed: null | string
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
  impactMetrics: ImpactMetrics | null
  isOpenSource: boolean
}
