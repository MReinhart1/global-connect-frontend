import 'antd/dist/reset.css'

import { Layout } from 'antd'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import { getUser } from './axios/apis/auth'
import { Footer } from './components/footer/Footer'
import { Navbar } from './components/navbar/Navbar'
import { Signin } from './pages/signin/Signin'
import useSessionStore from './stores/session'

function App() {
  const { isAuthenticated, setCurrentUser, logout } = useSessionStore()

  const ProtectedRoutes = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  }

  useEffect(() => {
    const userEmail = Cookies.get('userId')
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
      <Layout>
        <Navbar />
        {/* 64px for header and 64px for footer */}
        <Layout.Content className="h-[calc(100vh-64px-64px)]">
          <Routes>
            <Route element={<ProtectedRoutes />}>
              <Route path="/settings" index element={<div>Settings</div>} />
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
            </Route>
            <Route path="/" index element={<div>This is main page</div>} />
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
