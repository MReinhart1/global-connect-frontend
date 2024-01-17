import { Layout } from 'antd'

import { NavbarLinks } from './NavbarLinks'
import { ProfileMenu } from './ProfileMenu'

const Navbar = () => {
  return (
    <Layout.Header className=" bg-white">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <a href="/">GC</a>
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
