import { UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, notification } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Link } from 'react-router-dom'

import useSessionStore from '../../stores/session'

const ProfileMenu = () => {
  const { currentUser, isAuthenticated, isAdmin, logout } = useSessionStore()
  const [api, contextHolder] = notification.useNotification()

  const { occupation, firstName, lastName } = currentUser || {}

  const handleLogin = () => {
    logout()
      .then(() =>
        api['success']({
          message: 'Success',
          description: 'You have successfully logged out.',
          placement: 'bottomRight',
          duration: 3,
        }),
      )
      .catch((error: Error) =>
        api['error']({
          message: 'Something went wrong',
          description: error.message,
          placement: 'bottomRight',
          duration: 3,
        }),
      )
  }

  const menuItems: ItemType[] = [
    {
      key: 'menu-item-occupation',
      label: `Signed in as ${occupation}`,
      disabled: true,
    },
    {
      type: 'divider',
    },
    { key: 'menu-item-profile', label: <Link to="/profile">Profile</Link> },
    ...(isAdmin
      ? [
          {
            key: 'menu-item-users-management',
            label: <Link to="/users">Manage Users</Link>,
          },
        ]
      : []),
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
    },
  ]

  return (
    <>
      {contextHolder}
      {!isAuthenticated && (
        <Link to="/login" className="text-black">
          Login
        </Link>
      )}
      {isAuthenticated && (
        <Dropdown menu={{ items: menuItems }} trigger={['click']}>
          <Button className="border-0 shadow-none" icon={<UserOutlined />}>
            {firstName} {lastName}
          </Button>
        </Dropdown>
      )}
    </>
  )
}

export { ProfileMenu }
