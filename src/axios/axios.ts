import axios, { AxiosInstance } from 'axios'

// update to use an env variable
const API_BASE_URL = 'http://localhost:5173'

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// should now be handled by the browser using cookies
// client.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers?.setAuthorization(`Bearer ${token}`)
//     }
//     return config
//   },
//   error => {
//     console.error('Request interceptor error:', error)
//     return Promise.reject(error)
//   },
// )

export default client
