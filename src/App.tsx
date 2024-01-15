import 'antd/dist/reset.css'

import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import request from './axios/request'
import { Signin } from './pages/signin/Signin'
import useSessionStore from './stores/session'

function App() {
  const { isAuthenticated, currentUser } = useSessionStore()

  const ProtectedRoutes = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  }

  useEffect(() => {
    if (!isAuthenticated || !currentUser?.email) return

    const authenticate = async () => {
      const data = await request('/auth/user', {
        data: {
          email: currentUser.email,
        },
      })
      return data
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    authenticate().then(console.error)
  }, [currentUser?.email, isAuthenticated])

  return (
    <div className="App">
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
