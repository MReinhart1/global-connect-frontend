import { Button, Form, Input, notification, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { FC } from 'react'

import { useIsFormValid } from '../../hooks/useIsFormValid'
import { User } from '../../types/Users'
import { COUNTRIES } from '../../utils/countriesList'

type UserFormProps = {
  user: User | null
}

const UserForm: FC<UserFormProps> = ({ user }) => {
  const [form] = useForm<Partial<User>>()
  const { resetFields, isFieldsTouched } = form
  const { isFormValid } = useIsFormValid(form)
  const [api, contextHolder] = notification.useNotification()

  const handleSubmitForm = (values: Partial<User>) => {
    console.log(values)
    try {
      api['success']({
        message: 'Success',
        description: 'Changes have been saved successfully.',
        placement: 'bottomRight',
        duration: 5,
      })
    } catch (error) {
      api['error']({
        message: 'Something went wrong',
        description: 'Please check the form and try again.',
        placement: 'bottomRight',
        duration: 5,
      })
    }
  }

  const isFormTouched = isFieldsTouched()

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        initialValues={user || {}}
        onFinish={handleSubmitForm}
        onReset={() => resetFields()}
      >
        <h2 className="mb-8">User Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email', required: true }]}
          >
            <Input
              type="default"
              size="large"
              placeholder="email@example.com"
            />
          </Form.Item>
          <Form.Item
            label="Occupation"
            name="occupation"
            rules={[{ required: true }]}
          >
            <Select
              size="large"
              placeholder="Select occupation"
              options={[
                { label: 'Client', value: 'Client' },
                { label: 'Broker', value: 'Broker' },
                { label: 'Auditor', value: 'Auditor' },
                { label: 'Underwriter', value: 'Underwriter' },
                { label: 'Manager', value: 'Manager' },
                { label: 'Administrator', value: 'Administrator' },
              ]}
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input type="default" size="large" placeholder="Enter first name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input type="default" size="large" placeholder="Enter last name" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Manager"
            name="manager"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Select manager"
              size="large"
              options={[
                {
                  label: 'Name 1',
                  value: 'name1',
                },
                {
                  label: 'Name 2',
                  value: 'name2',
                },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[{ type: 'regexp', pattern: /^[0-9]*$/, required: true }]}
          >
            <Input
              type="default"
              size="large"
              placeholder="Enter phone number"
            />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item label="ID" name="_id">
            <Input disabled type="default" size="large" />
          </Form.Item>
        </div>

        <h2 className="my-8">Company Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Country"
            name="country_id"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              placeholder="Select country"
              size="large"
              options={COUNTRIES.map(country => ({
                label: country,
                value: country,
              }))}
            />
          </Form.Item>

          <Form.Item
            label="Company"
            name="company_id"
            rules={[{ required: true }]}
          >
            <Input
              type="default"
              size="large"
              placeholder="Enter company name"
            />
          </Form.Item>
        </div>

        <div className="flex flex-row flex-wrap gap-2 mt-2">
          <Button
            type="primary"
            htmlType="submit"
            className="w-28"
            disabled={isFormValid || !isFormTouched}
          >
            Save
          </Button>
          <Button
            type="default"
            htmlType="reset"
            danger
            className="w-28"
            disabled={!isFormTouched}
          >
            Reset
          </Button>
        </div>
      </Form>
    </>
  )
}

export { UserForm }
