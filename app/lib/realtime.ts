import axios from "axios"
import { RetroPGF5Response } from "../(white_navbar)/explore/RetroPGF5/type"

export const getRealTimeRetroPGF5 = async (): Promise<RetroPGF5Response> => {
    try {
      const response = await axios.get<RetroPGF5Response>(
        'https://worker.catalyzt.tech/api/retropgf5-live-data/retropgf5-live-data.json'
      )
      const data = response.data
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }