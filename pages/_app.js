import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globalsasstyle.scss'

import { useEffect } from 'react'

import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <Layout>
      {' '}
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
