import axios from 'axios'
import { RetroPGF5Response } from '../(white_navbar)/explore/RetroPGF5/RetroType5'

// Designed to only get the lastest round data, for the past round using this, please migrate to json file.
export const getRealTimeRetroPGF = async (): Promise<RetroPGF5Response> => {
  try {
    let apiUrl = process.env.NODE_ENV == 'production' 
    ? process.env.NEXT_PUBLIC_WORKER_API_BASE! 
    : process.env.NEXT_PUBLIC_WORKER_API_DEV!
    apiUrl = apiUrl + '/api/agora-cache/agora-cache.json'

    const response = await axios.get<RetroPGF5Response>(apiUrl)
    const data: RetroPGF5Response = response.data
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
