import { UserOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { Link } from 'react-router-dom'

import useSessionStore from '../../stores/session'

const ProfileMenu = () => {
  const { currentUser, isAuthenticated, logout } = useSessionStore()
  const occupation = currentUser?.occupation

  const handleLogin = () => {
    void logout()
  }

  const menuItems = [
    { key: 'menu-item-profile', label: 'Profile' },
    { key: 'menu-item-settings', label: 'Settings' },
    {
      key: 'menu-item-logout',
      label: (
        <Button
          type="link"
          className="border-0 w-full h-full p-0 m-0 text-left"
          onClick={handleLogin}
          danger
        >
          Logout
        </Button>
      ),
      path: '/logout',
    },
  ]

  return (
    <>
      {!isAuthenticated && (
        <Link to="/login" className="text-black">
          Login
        </Link>
      )}
      {isAuthenticated && (
        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <Button className="border-0 shadow-none" icon={<UserOutlined />}>
            {occupation}
          </Button>
        </Dropdown>
      )}
    </>
  )
}

export { ProfileMenu }
