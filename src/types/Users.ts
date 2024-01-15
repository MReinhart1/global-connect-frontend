export interface User {
  company: string
  country: string
  email: string
  firstName: string
  isDeleted: boolean
  lastName: string
  occupation: string
}

export interface UserPostRequest {
  email: string
  password: string
}
