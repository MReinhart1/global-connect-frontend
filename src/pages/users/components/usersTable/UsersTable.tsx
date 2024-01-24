import { useQuery } from '@tanstack/react-query'

import { getAllUsers } from '../../../../axios/apis/user'

const UsersTable = () => {
  const { isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
  })

  return <>{isLoading ? <div>Loading...</div> : <div>Users Table</div>}</>
}

export { UsersTable }
