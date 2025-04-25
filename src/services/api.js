import axios from 'axios'

const API = axios.create({
  baseURL: 'https://example.com/api', // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
})

// Add a request interceptor
API.interceptors.request.use(
  (config) => {
    // You can add authorization headers or other configurations here
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add a response interceptor
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally, e.g., redirect to login on 401
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized, redirecting to login...')
      // Add your redirection logic here
    }
    return Promise.reject(error)
  },
)

export default API
