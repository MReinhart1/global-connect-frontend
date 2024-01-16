import 'antd/dist/reset.css'

import { Button } from 'antd'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { getUser } from './axios/apis/auth'
import { Signin } from './pages/signin/Signin'
import useSessionStore from './stores/session'

function App() {
  const { isAuthenticated, setCurrentUser, logout } = useSessionStore()

  const ProtectedRoutes = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  }

  useEffect(() => {
    const userEmail = Cookies.get('email')
    if (!isAuthenticated) {
      return setCurrentUser(null)
    }

    const authenticate = async () => {
      if (!userEmail) {
        return logout()
      }
      const decodedUserEmail = atob(userEmail)
      const data = await getUser(decodedUserEmail)
      setCurrentUser(data?.result)
    }
    void authenticate()
    // only need to run this useEffect on initial render to get currentUser
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <div>Logged {isAuthenticated ? 'in' : 'out'}</div>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      {isAuthenticated && <Button onClick={logout}>Logout</Button>}
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/settings" index element={<div>Settings</div>} />
          <Route path="/workqueue" index element={<div>Work Queue</div>} />
          <Route path="/upload" index element={<div>Upload</div>} />
        </Route>
        <Route path="/" index element={<div>This is main page</div>} />
        <Route path="/login" index element={<Signin />} />
        <Route path="/*" index element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
