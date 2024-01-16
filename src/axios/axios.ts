/* TODO: add corresponding types and remove these exceptions */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios, { AxiosInstance, AxiosResponse } from 'axios'

import useSessionStore from '../stores/session'

// update to use an env variable
const API_BASE_URL = 'http://localhost:3000/'

const client: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 20000,
})

// response interceptor
client.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status, data } = response
    if (data.code === 401) {
      console.error('Authentication failed')
      useSessionStore()
        .logout()
        .catch(error => console.error(error))
      return window.location.replace('/login')
    }
    if (status < 200 || status >= 300) {
      return Promise.reject(new Error(data?.code + ':' + data?.message))
    }

    const apiResp = data
    if (apiResp?.code && (apiResp.code < 200 || apiResp.code >= 300)) {
      return Promise.reject({ code: apiResp.code, message: apiResp.message })
    }

    return data
  },
  error => {
    if (axios.isCancel(error)) {
      return Promise.reject('Cancel request' + String(error))
    } else {
      error.errMessage = 'Something went wrong. Please try again.'
    }
    return Promise.reject(error)
  },
)

export { client }
