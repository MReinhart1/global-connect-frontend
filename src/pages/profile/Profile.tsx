import { UserForm } from '../../components/accountForm/UserForm'
import { Container } from '../../components/container/Container'
import useSessionStore from '../../stores/session'

const Profile = () => {
  const { currentUser } = useSessionStore()

  return (
    <Container pageHeader="Profile Settings">
      <UserForm user={currentUser} />
    </Container>
  )
}

export { Profile }
