import 'antd/dist/reset.css'

import { useQuery } from '@tanstack/react-query'
import { Layout, Spin } from 'antd'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { getCurrentUser } from './axios/apis/auth'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Profile } from './pages/profile/Profile'
import { Signin } from './pages/signin/Signin'
import { Users } from './pages/users/Users'
import { Welcome } from './pages/welcome/Welcome'
import useSessionStore from './stores/session'

function App() {
  const { isAuthenticated, isAdmin, setCurrentUser, logout } = useSessionStore()
  const { isLoading } = useQuery({
    queryKey: ['currentUser'],
    queryFn: async () => {
      const response = await getCurrentUser()
      setCurrentUser(response?.result)
      return response
    },
    enabled: isAuthenticated,
  })

  const ProtectedRoutes = () => {
    return isAuthenticated ? (
      <Spin size="large" tip="Loading" spinning={isLoading}>
        <Outlet />
      </Spin>
    ) : (
      <Navigate to="/login" />
    )
  }

  const AdminRoutes = () => {
    return isAdmin ? <Outlet /> : <Navigate to="/" />
  }

  useEffect(() => {
    const userId = Cookies.get('userId')
    if (!isAuthenticated) {
      return setCurrentUser(null)
    }

    const authenticate = async () => {
      if (!userId) {
        return logout()
      }
    }
    void authenticate()
    // only need to run this useEffect on initial render to get currentUser
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Layout>
        <Navbar />
        {/* 64px for header and 64px for footer */}
        <Layout.Content className="min-h-[calc(100vh-64px-64px)]">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/workqueue" index element={<div>Work Queue</div>} />
              <Route path="/upload" index element={<div>Upload</div>} />
              <Route
                path="/program-snapshot"
                index
                element={<div>Program Snapshot</div>}
              />
              <Route
                path="/program-details"
                index
                element={<div>Program Details</div>}
              />
              <Route
                path="/service-history"
                index
                element={<div>Service History</div>}
              />
              <Route
                path="/management-reports"
                index
                element={<div>Management Reports</div>}
              />
              <Route element={<AdminRoutes />}>
                <Route path="/users" index element={<Users />} />
              </Route>
              <Route path="/profile" index element={<Profile />} />
            </Route>
            <Route path="/" index element={<Welcome />} />
            <Route path="/about" index element={<div>About page</div>} />
            <Route path="/login" index element={<Signin />} />
            <Route path="/*" index element={<div>404</div>} />
          </Routes>
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
