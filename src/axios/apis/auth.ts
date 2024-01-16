import { GetUserRequest, GetUserResponse } from '../../types/Users'
import { client } from '../axios'

export const login = async (email: string, password: string) => {
  try {
    return await client.request<string, string>({
      url: '/auth/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

export const getUser = async (email: string) => {
  try {
    return await client.request<GetUserRequest, GetUserResponse>({
      url: '/auth/user',
      method: 'POST',
      data: {
        email,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    await client.request({
      url: '/auth/logout',
      method: 'GET',
    })
  } catch (error) {
    console.error(error)
  }
}
