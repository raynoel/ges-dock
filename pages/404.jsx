import { FaExclamationTriangle } from 'react-icons/fa'
import Link from 'next/link'
import Layout from "@/components/Layout.jsx"
import { useEffect,useState } from 'react';

export default function NotFoundPage() {
  const [message, setMessage] = useState('jai faim')
  useEffect(() => {
    setMessage(process.env.NEXT_PUBLIC_MESSAGE)
  },[])

  return (
    <Layout title='Page Not Found'>
      <div className="not-found">
        <h1>404</h1>
        <FaExclamationTriangle style={{ fontSize: "100px", color: "var(--bs-ges-danger)"}} /> 
        <h4>Sorry, there is nothing here</h4>
        <p>{message}</p>
        <Link href='/'><a>Go Back Home</a></Link>
      </div>

      <style jsx>{`
        .not-found {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </Layout>
  )
}
