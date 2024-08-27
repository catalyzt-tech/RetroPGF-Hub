import axios from 'axios'
import { RetroPGF5Response } from '../(white_navbar)/explore/RetroPGF5/RetroType5'

export const getRealTimeRetroPGF5 = async (): Promise<RetroPGF5Response> => {
  try {
    let apiUrl =
      process.env.NODE_ENV == 'production'
        ? process.env.NEXT_PUBLIC_WORKER_API_BASE!
        : process.env.NEXT_PUBLIC_WORKER_API_DEV!
    apiUrl = apiUrl + '/api/retropgf5-live-data/retropgf5-live-data.json'
    const response = await axios.get<RetroPGF5Response>(apiUrl, {headers:{
      'Cache-Control': 'no-cache',
    }})
    const data: RetroPGF5Response = response.data
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
