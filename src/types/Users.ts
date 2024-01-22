export interface User {
  company_id: string
  country_id: string
  createdAt: string
  deleted: boolean
  email: string
  firstName: string
  id: string
  lastName: string
  manager: string
  mobile: string
  occupation: string
  password?: string
  updatedAt: string
}

export interface GetUserRequest {
  email: string
}
export interface GetUserResponse {
  result: User
}

export interface UserPostRequest {
  email: string
  password: string
}
