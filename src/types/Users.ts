export interface User {
  company: string
  country: string
  email: string
  firstName: string
  isDeleted: boolean
  lastName: string
  occupation: Occupation
}

export interface UserPostRequest {
  email: string
  password: string
}

export type Occupation =
  | 'Client'
  | 'Broker'
  | 'Auditor'
  | 'Underwriter'
  | 'Manager'
  | 'Administrator'
