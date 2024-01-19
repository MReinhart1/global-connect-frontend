import { Layout } from 'antd'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/lowQualityLogo.png'
import { NavbarLinks } from './NavbarLinks'
import { ProfileMenu } from './ProfileMenu'

const Navbar = () => {
  return (
    <Layout.Header className="bg-white shadow-white">
      <div className="flex h-16 justify-between max-w-screen-xl mx-auto">
        <div className="flex">
          <Link to="/">
            <img src={logo} alt="Global Connect Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <div className="sm:ml-6 w-full flex justify-between align-middle">
          <NavbarLinks />
          <div>
            <ProfileMenu />
          </div>
        </div>
      </div>
    </Layout.Header>
  )
}

export { Navbar }
