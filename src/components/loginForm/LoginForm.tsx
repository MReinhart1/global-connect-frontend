import { Form, Input, notification } from 'antd'
import { useForm } from 'antd/es/form/Form'

import { useIsFormValid } from '../../hooks/useIsFormValid'
import useSessionStore from '../../stores/session'
import { Button } from '../button/Button'

type LoginProps = {
  email: string
  password: string
}

const LoginForm = () => {
  const [form] = useForm<LoginProps>()
  const { isFormValid } = useIsFormValid(form)
  const { login } = useSessionStore()
  const [api, contextHolder] = notification.useNotification()

  const handleDisplayError = (message: string) => {
    api['error']({
      message: 'Something went wrong',
      description: message,
      placement: 'bottomRight',
      duration: 5,
    })
  }

  const handleSubmitForm = (values: LoginProps) => {
    const { email, password } = values
    login(email, password).catch((error: Error) =>
      handleDisplayError(error.message),
    )
  }

  return (
    <>
      {contextHolder}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
            <Form.Item
              label="Email"
              name="email"
              validateTrigger="onBlur"
              rules={[
                {
                  type: 'email',
                  message: 'Please enter a valid email',
                  required: true,
                },
              ]}
            >
              <Input
                type="default"
                placeholder="email@example.com"
                autoComplete="email"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" disabled={isFormValid}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  )
}

export { LoginForm }
