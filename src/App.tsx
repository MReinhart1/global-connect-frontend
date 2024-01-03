import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

function App() {
  const token = true //This is not done with redux now, need to implement using react state management
  const ProtectedRoutes = () => {
    return token ? <Outlet /> : <Navigate to="/auth/login" />
  }
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/settings" index element={<div>Settings</div>} />
          <Route path="/workqueue" index element={<div>Work Queue</div>} />
          <Route path="/upload" index element={<div>Upload</div>} />
        </Route>
        <Route path="/" index element={<div>Home</div>} />
        <Route path="/login" index element={<div>Login</div>} />
        <Route path="/*" index element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
