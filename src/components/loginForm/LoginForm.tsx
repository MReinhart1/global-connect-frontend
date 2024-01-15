import { Form, Input } from 'antd'
import { MouseEvent } from 'react'

import { Button } from '../button/Button'

const LoginForm = () => {
  const handleOnSubmitClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <Form layout="vertical">
          <Form.Item
            label="Email"
            rules={[
              {
                type: 'email',
                message: 'Please enter a valid email',
                required: true,
              },
            ]}
          >
            <Input type="default" placeholder="email@example.com" />
          </Form.Item>
          <Form.Item
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              type="primary"
              onClick={handleOnSubmitClick}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export { LoginForm }
