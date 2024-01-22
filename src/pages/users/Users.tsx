import Search from 'antd/es/input/Search'

import { Container } from '../../components/container/Container'

const Users = () => {
  return (
    <>
      <Container pageHeader="Users Management">
        <div className="my-5">
          <Search
            placeholder="Enter user's email to search"
            enterButton="Search"
            size="large"
            type="default"
          />
        </div>
      </Container>
    </>
  )
}

export { Users }
