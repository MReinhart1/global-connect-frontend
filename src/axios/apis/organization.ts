import { Country } from '../../types/Organization'
import { client } from '../axios'

export const getCountries = () => {
  return client.request<string, Country[]>({
    url: '/auth/org/getcountries',
    method: 'GET',
  })
}
