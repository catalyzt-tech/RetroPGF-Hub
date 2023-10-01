import axios from "axios"

export const Axios = axios.create({
    baseURL: import.meta.env.VITE_Backend_Url || "http://localhost:8080",
    withCredentials: true
});