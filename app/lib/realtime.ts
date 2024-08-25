import axios from "axios"
import { RetroPGF5Response } from "../(white_navbar)/explore/RetroPGF5/type"

export const getRealTimeRetroPGF5 = async (): Promise<RetroPGF5Response> => {
    try {
      const response = await axios.get<RetroPGF5Response>(
        process.env.NODE_ENV == "production" ? process.env.NEXT_PUBLIC_WORKER_API_BASE! : process.env.NEXT_PUBLIC_WORKER_API_DEV!
      )
      const data = response.data
      return data
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }