export interface RetroPGF5Response {
  data: iRetroPGF5Project[]
  msg: string
}

export interface iRetroPGF5Project {
  applicationCategory: ApplicationCategoryEnum | null
  applicationId: string
  category: Category
  contracts: Contract[]
  description: string
  github: Array<Link | string>
  grantsAndFunding: GrantsAndFunding
  id: string
  impactStatement: ImpactStatement
  links?: Link[]
  name: string
  organization: Organization | null
  packages: Array<Link | string>
  pricingModel?: PricingModel
  profileAvatarUrl: string
  projectCoverImageUrl: string
  projectId: string
  socialLinks: SocialLinks
  team: Team[] | null
}

export enum ApplicationCategoryEnum {
  EthereumCoreContributions = 'ETHEREUM_CORE_CONTRIBUTIONS',
  OpStackResearchAndDevelopment = 'OP_STACK_RESEARCH_AND_DEVELOPMENT',
  OpStackTooling = 'OP_STACK_TOOLING',
}

export enum Category {
  CeFi = 'CeFi',
  CrossChain = 'Cross Chain',
  DeFi = 'DeFi',
  Governance = 'Governance',
  Nft = 'NFT',
  Social = 'Social',
  Utility = 'Utility',
}

export interface Contract {
  address: string
  chainId: number
  deployerAddress: string
  deploymentTxHash: string
  verificationProof: string
}

export interface Link {
  description: null | string
  name: null | string
  url: string
}

export interface GrantsAndFunding {
  grants: GrantElement[]
  revenue: any[]
  ventureFunding: VentureFunding[]
}

export interface GrantElement {
  amount: string
  date: string
  details: null | string
  grant: GrantEnum | null
  link: null | string
}

export enum GrantEnum {
  FoundationGrant = 'foundation-grant',
  FoundationMission = 'foundation-mission',
  Test = 'test',
  TokenHouseMission = 'token-house-mission',
}

export interface VentureFunding {
  amount: string
  details: string
  year: string
}

export interface ImpactStatement {
  category: ApplicationCategoryEnum | null
  statement: Statement[] | null
  subcategory: string[] | null
}

export interface Statement {
  answer: string
  question: string
}

export interface Organization {
  description: string
  name: string
  organizationAvatarUrl: null | string
  organizationCoverImageUrl: null | string
  socialLinks: SocialLinks
  team: string[]
}

export interface SocialLinks {
  farcaster: string[]
  mirror: null | string
  twitter: null | string
  website: string[]
}

export enum PricingModel {
  Free = 'free',
  Freemium = 'freemium',
  PayToUse = 'pay_to_use',
}

export interface Team {
  active_status: ActiveStatus
  custody_address: string
  display_name: string
  fid: number
  follower_count: number
  following_count: number
  object: Object
  pfp_url: string
  power_badge: boolean
  profile: Profile
  username: string
  verifications: string[]
  verified_addresses: VerifiedAddresses
}

export enum ActiveStatus {
  Inactive = 'inactive',
}

export enum Object {
  User = 'user',
}

export interface Profile {
  bio: Bio
}

export interface Bio {
  text: string
}

export interface VerifiedAddresses {
  eth_addresses: string[]
  sol_addresses: string[]
}
