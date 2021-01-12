import React from 'react'

// TYPES
import { AppProps } from 'next/app'

// STYLES
import '@shared/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
