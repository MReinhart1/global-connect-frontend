import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Button, Form, Input, notification, Select } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { FC } from 'react'

import { updateUser } from '../../axios/apis/user'
import { useIsFormValid } from '../../hooks/useIsFormValid'
import useSessionStore from '../../stores/session'
import { User } from '../../types/Users'

type UserFormProps = {
  user: User | null
}

const UserForm: FC<UserFormProps> = ({ user }) => {
  const { isAdmin } = useSessionStore()
  const [form] = useForm<Partial<User>>()

  const { isFormValid } = useIsFormValid(form)
  const [api, contextHolder] = notification.useNotification()
  const queryClient = useQueryClient()

  const { mutate: saveChanges, isPending } = useMutation({
    mutationKey: ['updateUser', 'currentUser'],
    mutationFn: updateUser,
    onSuccess: () => {
      api['success']({
        message: 'Success',
        description: 'Changes have been saved successfully.',
        placement: 'bottomRight',
        duration: 5,
      })
    },
    onSettled: async () => {
      await queryClient.refetchQueries({
        queryKey: ['currentUser'],
      })
    },
    onError: () => {
      api['error']({
        message: 'Something went wrong',
        description: 'Please check the form and try again.',
        placement: 'bottomRight',
        duration: 5,
      })
    },
  })

  const handleSubmitForm = () => {
    const values = getFieldsValue()
    saveChanges({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      occupation: values.occupation,
      mobile: values.mobile,
    })
  }

  if (!form) {
    return null
  }

  const { getFieldsValue, resetFields, isFieldsTouched } = form
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
              disabled={!isAdmin}
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
              options={[]}
              disabled={!isAdmin}
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
              disabled={!isAdmin}
            />
          </Form.Item>
        </div>

        <div className="flex flex-row flex-wrap gap-2 mt-2">
          <Button
            type="primary"
            htmlType="submit"
            className="w-28"
            disabled={isFormValid || !isFormTouched}
            loading={isPending}
          >
            Save
          </Button>
          <Button
            type="default"
            htmlType="reset"
            danger
            className="w-28"
            disabled={!isFormTouched}
            loading={isPending}
          >
            Reset
          </Button>
        </div>
      </Form>
    </>
  )
}

export { UserForm }
