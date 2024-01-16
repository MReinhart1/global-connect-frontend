import type { ButtonProps } from 'antd'
import { Button as ButtonAnt } from 'antd'

const Button = (props?: ButtonProps) => {
  return (
    <ButtonAnt
      className="flex w-full justify-center rounded-md bg-blue-600 px-3 text-white shadow-sm hover:bg-blue-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-60 disabled:hover:bg-gray-100 disabled:hover:text-gray-400"
      {...props}
    />
  )
}

export { Button }
