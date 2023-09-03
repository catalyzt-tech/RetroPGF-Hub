import axios from "axios"

export const Axios = axios.create({
    baseURL: import.meta.env.Backend_Url || "http://localhost:8080",
});