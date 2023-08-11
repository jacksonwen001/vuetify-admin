import axios, { type AxiosInstance } from "axios";
import { fetachAccessToken } from "./token";

const baseURL = import.meta.env.BASE_URL
const requestTimeout = 6000; 

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    'Content-Type': "application/json",
  },
})

api.interceptors.request.use(
  config => {
    const token = fetachAccessToken(); 
    if (token) config.headers['Authorization'] = token;
    return config
  }, 
  error => Promise.reject(error)
)

api.interceptors.response.use(
  response => {
    return response
  }, 
  error => {
    const { response, message } = error
    console.log(response)
    console.log(message)
  }
)

export default api; 