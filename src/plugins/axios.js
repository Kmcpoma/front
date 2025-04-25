import axios from 'axios'
import { getToken } from '../services/tokenService'

const axiosInstance = axios.create({
  baseURL: 'https://example.com/api', // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export default axiosInstance
