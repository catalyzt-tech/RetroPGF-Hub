export interface RetroPGF5Response {
  msg:  string;
  type: string;
  data: iRetroPGF5Project[];
}

export interface SocialLinks {
  website: string[]
  farcaster: string[]
  twitter: string | null
  mirror: string | null
}

export interface GitHub {
  url: string
  name: string | null
  description: string | null
}

export interface Package {
  url: string
  name: string | null
  description: string | null
}

export interface Contract {
  address: string
  deploymentTxHash: string
  deployerAddress: string
  verificationProof: string | null
  chainId: number
}

export interface VentureFunding {
  amount: string
  year: string
  details: string | null
}

export interface Grant {
  grant: string | null
  link: string | null
  amount: string
  date: string
  details: string | null
}

export interface Revenue {
  amount: string
  details: string | null
}

export interface Link {
  url: string
  name: string | null
  description: string | null
}

export interface iRetroPGF5Project {
  name: string
  description: string | null
  projectAvatarUrl: string | null
  projectCoverImageUrl: string | null
  category: string | null
  osoSlug: string | null
  socialLinks: SocialLinks
  team: string[]
  github: GitHub[]
  packages: Package[]
  contracts: Contract[]
  grantsAndFunding: {
    ventureFunding: VentureFunding[]
    grants: Grant[]
    revenue: Revenue[]
  }
  pricingModel: string | null
  pricingModelDetails: string | null
  links: Link[]
}
