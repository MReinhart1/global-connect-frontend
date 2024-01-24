import { UserForm } from '../../components/accountForm/UserForm'
import { Container } from '../../components/container/Container'
import useSessionStore from '../../stores/session'
import { ChangePassword } from './components/changePassword/ChangePassword'

const Profile = () => {
  const { currentUser, isAdmin } = useSessionStore()

  return (
    <>
      <Container pageHeader="Profile Settings">
        <UserForm user={currentUser} />
      </Container>
      {isAdmin && (
        <Container title="Change Password">
          <ChangePassword />
        </Container>
      )}
    </>
  )
}

export { Profile }
