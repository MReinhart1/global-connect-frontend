import { GetUserRequest, GetUserResponse } from '../../types/Users'
import { client } from '../axios'

export const login = (email: string, password: string) => {
  return client.request<string, string>({
    url: '/auth/login',
    method: 'POST',
    data: {
      email,
      password,
    },
  })
}

export const getCurrentUser = () => {
  return client.request<GetUserRequest, GetUserResponse>({
    url: '/auth/currentuser',
    method: 'GET',
  })
}

export const logout = () => {
  return client.request({
    url: '/auth/logout',
    method: 'GET',
  })
}
