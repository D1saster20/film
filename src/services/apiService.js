import axios from "axios";
import {token} from "../configs";
import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})
export {
    apiService
}

