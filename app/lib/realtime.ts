import axios from 'axios'
import { WorkerResponse, iRetroPGF5Project } from '../(white_navbar)/explore/RetroPGF5/RetroType5'

// Designed to only get the lastest round data, for the past round using this, please migrate to json file.
export const getRealTimeRetroPGF = async (): Promise<iRetroPGF5Project[]> => {
  try {
    let apiUrl = process.env.NODE_ENV == 'production' 
    ? process.env.NEXT_PUBLIC_WORKER_API_BASE! 
    : process.env.NEXT_PUBLIC_WORKER_API_DEV!
    apiUrl = apiUrl + '/api/agora-cache/agora-cache.json'

    const response = await axios.get<WorkerResponse>(apiUrl)
    const data: WorkerResponse = response.data
    if (!Array.isArray(data.data) || data.data.length === 0 || !Array.isArray(data.data[0].data)) {  
      throw new Error('Unexpected response structure');  
    }  
    
    return data.data[0].data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
