import axios from "axios"

export const Axios = axios.create({
    baseURL: import.meta.env.MODE === "development" ? import.meta.env.VITE_Backend_URL_DEV : import.meta.env.VITE_Backend_URL_PROD,
    withCredentials: true
});