import axios from 'axios'
import {
  WorkerResponse,
  iRetroPGF5Project,
} from '../(white_navbar)/explore/RetroPGF5/RetroType5'
import {
  iRetroPGF6Project,
  WorkerResponseRound6,
} from '../(white_navbar)/explore/RetroPGF6/RetroType6'
// import { EASProjectMetadata } from '../types/realtime-api-agora'

// Designed to only get the lastest round data, for the past round using this, please migrate to json file.
export const getRealTimeRetroPGF5 = async (): Promise<iRetroPGF5Project[]> => {
  try {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_WORKER_API_BASE
        : process.env.NEXT_PUBLIC_WORKER_API_DEV

    if (!baseUrl) {
      throw new Error('API base URL is not defined in environment variables.')
    }
    const apiUrl = baseUrl + '/api/agora-cache/agora-cache.json'
    const response = await axios.get<WorkerResponse>(apiUrl)
    const data: WorkerResponse = response.data
    if (
      !Array.isArray(data.data) ||
      data.data.length === 0 ||
      !Array.isArray(data.data[0].data)
    ) {
      throw new Error('Unexpected response structure')
    }
    return data.data[0].data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
export const getRealTimeRetroPGF6 = async (): Promise<iRetroPGF6Project[]> => {
  try {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? process.env.NEXT_PUBLIC_WORKER_API_BASE
        : process.env.NEXT_PUBLIC_WORKER_API_BASE

    if (!baseUrl) {
      throw new Error('API base URL is not defined in environment variables.')
    }
    const apiUrl = baseUrl + '/api/retropgf6-live-data/retropgf6-live-data.json'
    const response = await axios.get<WorkerResponseRound6>(apiUrl)
    const data: WorkerResponseRound6 = response.data
    if (
      !Array.isArray(data.data) ||
      data.data.length === 0 ||
      !Array.isArray(data.data)
    ) {
      throw new Error('Unexpected response structure')
    }
    return data.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}

//To be delete when ensure the new data is available from agora and EAS
// export const getRealTimeRetroPGF6 = async (): Promise<EASProjectMetadata[]> => {
//   const mockData = [
//     {
//       name: 'RetroPGF Hub',
//       description:
//         "RetroPGF Hub is the central hub for optimists, badgeholders and the broader community to engage, explore, discover, and stay informed about all things related to Retro Funding (RetroPGF). We offer a platform for community members to provide supportive feedback or project suggestions. It also serves as a comprehensive learning and discovery space, encapsulating historical context, scope, criteria, nominated projects, result statistics, and reflections in each round of Retro Funding. Whether you're a builder, user, or just curious about Retro Funding, this hub is your gateway to knowledge, collaboration, and community awareness.",
//       projectAvatarUrl:
//         'https://storage.googleapis.com/op-atlas/048aa49e-1be8-466c-b2a2-0153e6323ea7.png',
//       projectCoverImageUrl:
//         'https://storage.googleapis.com/op-atlas/516328f4-c92d-4087-8991-6e16f97f79b9.png',
//       category: 'Governance',
//       osoSlug: '',
//       socialLinks: {
//         website: ['https://retropgfhub.com'],
//         farcaster: [],
//         twitter: 'https://x.com/RetroPGFHub',
//         mirror: null,
//       },
//       team: ['842286', '843901'],
//       github: [
//         {
//           url: 'https://github.com/catalyzt-tech/RetroPGFHub-API-Cache',
//           name: 'RetroPGF API Cache',
//           description: 'Cached API for Agora API and Optimism data.',
//         },
//         {
//           url: 'https://github.com/catalyzt-tech/RetroPGF-Hub-Backend-Go',
//           name: 'RetroPGF Hub Server',
//           description: 'The server and backend of the RetroPGF Hub website.',
//         },
//         {
//           url: 'https://github.com/catalyzt-tech/RetroPGF-Hub',
//           name: 'RetroPGF Hub Website',
//           description:
//             'The user interface and frontend of the RetroPGF Hub website.',
//         },
//       ],
//       packages: [],
//       contracts: [],
//       grantsAndFunding: {
//         ventureFunding: [],
//         grants: [],
//         revenue: [],
//         retroFunding: [
//           {
//             grant: 'retroFunding',
//             link: null,
//             amount: '44720.68',
//             date: '',
//             details: 'Round 3',
//           },
//         ],
//       },
//       pricingModel: 'free',
//       pricingModelDetails: '',
//       links: [
//         {
//           url: 'https://retropgfhub.com/',
//           name: 'RetroPGF Hub Website',
//           description: '',
//         },
//       ],
//     },
//   ]
//   return mockData
// }
