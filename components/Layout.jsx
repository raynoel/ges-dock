import Head from 'next/head'
import Footer from './Footer.jsx'

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      {children}
      <Footer />
      
    </>
  )
}

Layout.defaultProps = {
  title: 'GES CANADA',
  description: 'GES CANADA',
  keywords: 'Canada, évènements, expositions, events, trade shows'
}
