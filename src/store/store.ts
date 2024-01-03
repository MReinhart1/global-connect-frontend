import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const store = () => ({
  currentUser: {},
})

export const useStore = create(persist(devtools(store), { name: 'store' }))
