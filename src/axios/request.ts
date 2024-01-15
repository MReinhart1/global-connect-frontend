import axios, {
  AxiosHeaders,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios'

import useSessionStore from '../stores/session'

// update to use an env variable
const API_BASE_URL = 'http://localhost:5173/'

const request: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

// request interceptor
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const _headers: AxiosHeaders = config.headers || {}

    // const session = useSessionStore.getState().session
    // if (session?.token && config.url && config.url?.startsWith('/api/')) {
    //   _headers['Authorization'] = encodeURIComponent(session.token)
    // }

    // if (!config.headers || config.headers['Content-Type'] === '') {
    //   _headers['Content-Type'] = 'application/json'
    // }

    config.headers = _headers
    return config
  },
  error => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    error.data = {}
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    error.data.msg = 'Something went wrong. Please try again.'
    return Promise.resolve(error)
  },
)

// response interceptor
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { status, data } = response
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (data.code === 401) {
      console.log('Authentication failed')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      useSessionStore().logout()
      return window.location.replace('/login')
    }
    if (status < 200 || status >= 300) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return Promise.reject(new Error(data?.code + ':' + data?.message))
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const apiResp = data
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (apiResp?.code && (apiResp.code < 200 || apiResp.code >= 300)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      return Promise.reject({ code: apiResp.code, message: apiResp.message })
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return data
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject('cancel request' + String(error))
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      error.errMessage = 'Something went wrong. Please try again.'
    }
    return Promise.reject(error)
  },
)

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

export default request
