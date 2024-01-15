import Cookies from 'js-cookie'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { User } from '../types/Users'

interface SessionState {
  currentUser: User | null
  getCurrentUser: () => void
  isAuthenticated: boolean
  login: (cu: User) => void
  logout: () => void
  // add getAuthToken property
}

const useSessionStore = create<SessionState>()(
  persist(
    devtools(
      immer((set, get) => ({
        currentUser: null,
        isAuthenticated: Cookies.get('authToken') === 'true',
        getAuthToken: Cookies.get('authToken'),
        getCurrentUser: () => get().currentUser,
        login: () => {
          Cookies.set('authToken', 'true')
          set({ isAuthenticated: true })
        },
        logout: () => {
          Cookies.remove('authToken')
          set({ isAuthenticated: false })
        },
      })),
    ),
    { name: 'sessionStore' },
  ),
)

export default useSessionStore
