import axios from "axios";

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

apiInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export default apiInstance