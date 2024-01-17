import Cookies from 'js-cookie'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import { getUser, login, logout } from '../axios/apis/auth'
import { User } from '../types/Users'

interface SessionState {
  currentUser: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  setCurrentUser: (cu?: User | null) => void
}

const initialSessionState = {
  currentUser: null,
  isAuthenticated: false,
}

const useSessionStore = create<SessionState>()(
  persist(
    devtools(
      immer(set => ({
        ...initialSessionState,
        isAuthenticated:
          Cookies.get('token') === 'true' && Cookies.get('userId') === 'true',
        setCurrentUser: cu => set({ currentUser: cu }),
        login: async (email: string, password: string) => {
          try {
            const loginResponse = await login(email, password)
            if (loginResponse === 'Logged In') {
              const userData = await getUser(email)
              if (userData?.result) {
                set({
                  currentUser: userData.result,
                  isAuthenticated: true,
                })
                const encodedEmail = btoa(userData.result.email ?? email)
                Cookies.set('userId', encodedEmail)
              } else {
                throw new Error('User data not available')
              }
            } else {
              throw new Error('Login failed')
            }
          } catch (error) {
            console.error('Login error:', error)
            throw new Error('Login failed')
          }
        },
        logout: async () => {
          await logout()
          Cookies.remove('token')
          Cookies.remove('userId')
          set({ isAuthenticated: false, currentUser: null })
        },
      })),
    ),
    { name: 'sessionStore' },
  ),
)

export default useSessionStore
