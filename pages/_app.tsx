import React from 'react'
import '../styles/globals.css'
import Header from '../components/common/Header'
import Fotter from '../components/common/Fotter'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
      <Fotter />
    </React.Fragment>
  )
}

export default MyApp
