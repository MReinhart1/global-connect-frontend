import { FC } from 'react'

type ContainerProps = {
  children: React.ReactNode
  pageHeader?: string
  title?: string
}

const Container: FC<ContainerProps> = ({ title, children, pageHeader }) => {
  return (
    <div className="max-w-screen-xl xl:mx-auto sm:mx-7">
      {pageHeader && <h1 className="text-3xl mt-8 mb-10">{pageHeader}</h1>}
      <div className="my-4 py-11 px-14 bg-white">
        {title && <h2 className="text-2xl font-semibold mb-10">{title}</h2>}
        {children}
      </div>
    </div>
  )
}

export { Container }
