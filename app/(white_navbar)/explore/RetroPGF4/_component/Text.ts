import { name } from '@cloudinary/url-gen/actions/namedTransformation'

export const tab = [
  {
    text: 'Project',
    index: 0,
  },
  {
    text: 'History',
    index: 1,
  },
  {
    text: 'Statistics',
    index: 2,
  },
  {
    text: `Badgeholder's Metrics`,
    index: 3,
  },
]

export const sorting = [
  {
    name: 'Highest Rewards',
  },
  {
    name: 'Lowest Rewards',
  },
  // {
  //   name: 'Most in ballots',
  // },
  // {
  //   name: 'Least in ballots',
  // },
  {
    name: 'Project Name (A-Z)',
  },
  {
    name: 'Project Name (Z-A)',
  },
]

export const category = [
  {
    name: 'CeFi',
    subCategory: [],
  },
  {
    name: 'DeFi',
    subCategory: [],
  },
  {
    name: 'NFT',
    subCategory: [],
  },
  {
    name: 'Social',
    subCategory: [],
  },
  {
    name: 'Utility',
    subCategory: [],
  },
  {
    name: 'Cross Chain',
    subCategory: [],
  },
  {
    name: 'Governance',
    subCategory: [],
  },
]

export const eligibilityStatus = [
  {
    name: 'All',
    value: 463,
  },
  {
    name: 'Eligible',
    value: 230,
  },
  {
    name: 'Rejected',
    value: 233,
  },
]

export const isOpenSource = [
  {
    name: 'All',
  },
  {
    name: 'Open Source',
  },
  {
    name: 'Closed Source',
  },
]

export const min = -1
export const max = 663855
export const itemsPerPage = 24

export const multiplyOpenSource = [
  {
    name: 'All',
  },
  {
    name: 'Multiply Open-Source',
  },
  {
    name: 'Not Multiply Open-Source',
  },
]
