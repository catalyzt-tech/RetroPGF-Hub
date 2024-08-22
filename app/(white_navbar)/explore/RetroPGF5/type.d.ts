export interface RetroPGF5Project {
  id: string
  name: string
  category: string
  description: string
  profileAvatarUrl: string
  projectCoverImageUrl: string
  socialLinks: SocialLinks
  team: string[]
  github: Array<GithubClass | string>
  packages: string[]
  links: string[]
  organization: Organization
  contracts: Contract[]
  grantsAndFunding: GrantsAndFunding
}

export interface Contract {
  address: string
  deploymentTxHash: string
  deployerAddress: string
  chainId: number
}

export interface GithubClass {
  repo_rank: number
  star_count: number
  starred_events: number
  starred_by_top_devs: number
  fork_count: number
  forked_events: number
  forked_by_top_devs: number
  fulltime_developer_average_6_months: number
  new_contributor_count_6_months: number
  age_of_project_years: number
}

export interface GrantsAndFunding {
  ventureFunding: VentureFunding[]
  grants: Grant[]
  revenue: Revenue[]
}

export interface Grant {
  grant: string
  link: string
  amount: string
  date: string
  details: string
}

export interface Revenue {
  amount: string
  details: string
}

export interface VentureFunding {
  amount: string
  year: string
  details: string
}

export interface Organization {
  name: string
  profileAvatarUrl: string
}

export interface SocialLinks {
  twitter: string
  farcaster: string
  mirror: string
  website: string
}
