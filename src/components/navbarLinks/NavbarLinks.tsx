import { Menu } from 'antd'
import { useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import useSessionStore from '../../stores/session'

type MenuItem = {
  key: string
  label: string | JSX.Element
  path: string
}

const publicMenuItems = [
  { key: 'menu-item-about', label: 'About', path: '/about' },
]

const authorizedMenuItems = [
  { key: 'menu-item-workqueue', label: 'Work Queue', path: '/workqueue' },
  { key: 'menu-item-upload', label: 'Upload Program', path: '/upload' },
  {
    key: 'menu-item-program-snapshot',
    label: 'Program Snapshot',
    path: '/program-snapshot',
  },
  {
    key: 'menu-item-program-details',
    label: 'Program Details',
    path: '/program-details',
  },
  {
    key: 'menu-item-service-history',
    label: 'Service History',
    path: '/service-history',
  },
  {
    key: 'menu-item-management-reports',
    label: 'Management Reports',
    path: '/management-reports',
  },
]

const transformMenuItems = (menuItems: MenuItem[]) => {
  return menuItems.map(item => ({
    path: item.path,
    key: item.key,
    label: <Link to={item.path}>{item.label}</Link>,
  }))
}

const NavbarLinks = () => {
  const { isAuthenticated } = useSessionStore()
  const { pathname } = useLocation()
  const menuItems = useMemo(
    () =>
      transformMenuItems(
        isAuthenticated ? authorizedMenuItems : publicMenuItems,
      ),
    [isAuthenticated],
  )
  const selectedKey = menuItems.find(item => item.path === pathname)?.key ?? ''

  return (
    <Menu
      theme="light"
      mode="horizontal"
      items={menuItems}
      selectedKeys={[selectedKey]}
      className="border-none"
    />
  )
}

export { NavbarLinks }
