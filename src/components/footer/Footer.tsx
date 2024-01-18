import { Layout } from 'antd'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <Layout.Footer className="bg-slate-700 text-white">
      <div className="flex justify-between">
        <p className="m-0">
          <a
            href="/terms"
            referrerPolicy="no-referrer"
            className="text-white underline hover:underline"
          >
            Terms of Use
          </a>
          <span> | </span>
          <a
            href="/privacy"
            referrerPolicy="no-referrer"
            className="text-white underline hover:underline"
          >
            Privacy Policy
          </a>
        </p>
        <p className="m-0">
          &copy; All rights reserved. Global Connect {currentYear}
        </p>
      </div>
    </Layout.Footer>
  )
}

export { Footer }
