import { Navigate } from 'react-router-dom'

import { LoginForm } from '../../components/loginForm/LoginForm'
import useSessionStore from '../../stores/session'

const Signin = () => {
  const { isAuthenticated } = useSessionStore()
  if (isAuthenticated) {
    return <Navigate to="/workqueue" />
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center align-middle py-16 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>
      <LoginForm />
    </div>
  )
}

export { Signin }
