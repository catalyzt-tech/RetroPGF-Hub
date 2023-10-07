import { Axios } from '@/lib/axios.js'

export const load = async ({ params }) => {
    try {
      const response = await Axios.get(`/api/projects/${params.slug}`);
      return response.data.data
    } catch (error) {
      console.log(error);
    }
  }
  