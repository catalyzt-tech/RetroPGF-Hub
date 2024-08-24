export interface RetroPGF5Response {
  msg:  string;
  type: string;
  data: RetroPGF5Project[];
}

export interface RetroPGF5SocialLinks {
  website: string[]
  farcaster: string[]
  twitter: string | null
  mirror: string | null
}

export interface RetroPGF5GitHub {
  url: string
  name: string | null
  description: string | null
}

export interface RetroPGF5Package {
  url: string
  name: string | null
  description: string | null
}

export interface RetroPGF5Contract {
  address: string
  deploymentTxHash: string
  deployerAddress: string
  verificationProof: string | null
  chainId: number
}

export interface RetroPGF5VentureFunding {
  amount: string
  year: string
  details: string | null
}

export interface RetroPGF5Grant {
  grant: string | null
  link: string | null
  amount: string
  date: string
  details: string | null
}

export interface RetroPGF5Revenue {
  amount: string
  details: string | null
}

export interface RetroPGF5Link {
  url: string
  name: string | null
  description: string | null
}

export interface RetroPGF5Project {
  name: string
  description: string | null
  projectAvatarUrl: string | null
  projectCoverImageUrl: string | null
  category: string | null
  osoSlug: string | null
  socialLinks: RetroPGF5SocialLinks
  team: string[]
  github: RetroPGF5GitHub[]
  packages: RetroPGF5Package[]
  contracts: RetroPGF5Contract[]
  grantsAndFunding: {
    ventureFunding: RetroPGF5VentureFunding[]
    grants: RetroPGF5Grant[]
    revenue: RetroPGF5Revenue[]
  }
  pricingModel: string | null
  pricingModelDetails: string | null
  links: RetroPGF5Link[]
}
