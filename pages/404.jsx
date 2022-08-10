import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from "@/components/Layout.jsx"

export default function NotFoundPage() {
  return (
    <Layout title='Page Not Found'>
      <div className="not-found">
        <h1><FaExclamationTriangle /> 404</h1>
        <h4>Sorry, there is nothing here</h4>
        <Link href='/'><a>Go Back Home</a></Link>
      </div>

      <style jsx>
        {`
          .not-found {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
        `}
      </style>
    </Layout>
  )
}
