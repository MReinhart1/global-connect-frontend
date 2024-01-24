import { Button, Form, Input, notification } from 'antd'
import { useForm } from 'antd/es/form/Form'

import { useIsFormValid } from '../../../../hooks/useIsFormValid'

type ChangePasswordProps = {
  confirmPassword: string
  password: string
}

const ChangePassword = () => {
  const [form] = useForm<ChangePasswordProps>()
  const { isFormValid, isFormTouched } = useIsFormValid(form)
  const [api, contextHolder] = notification.useNotification()

  const handleSubmitForm = () => {
    const values = form.getFieldsValue()
    console.log(values)
    api['success']({
      message: 'Success',
      description: 'Password has been updated successfully.',
      placement: 'bottomRight',
      duration: 5,
    })
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        initialValues={{ password: '', confirmPassword: '' }}
        onFinish={handleSubmitForm}
        onReset={() => form.resetFields()}
      >
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="New Password"
            name="password"
            hasFeedback
            rules={[
              {
                required: true,
              },
              { min: 6, message: 'Password must be at least 8 characters.' },
            ]}
          >
            <Input.Password placeholder="Enter your new password" />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Confirm New Password"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('Password and confirm password do not match.'),
                  )
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your new password" />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            disabled={isFormValid && !isFormTouched}
          >
            Change
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export { ChangePassword }
