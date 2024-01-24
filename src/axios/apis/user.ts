import { UpdateUserRequest, User } from '../../types/Users'
import { client } from '../axios'

export const updateUser = (user: Partial<User>) => {
  return client.request<UpdateUserRequest, User>({
    url: '/auth/updateuser',
    method: 'POST',
    data: {
      user,
    },
  })
}

export const getUserById = (_id: string) => {
  return client.request<string, User>({
    url: '/auth/getuserbyid',
    method: 'POST',
    data: {
      _id,
    },
  })
}

export const getAllUsers = () => {
  return client.request<string, User[]>({
    url: '/auth/allusers',
    method: 'GET',
  })
}
