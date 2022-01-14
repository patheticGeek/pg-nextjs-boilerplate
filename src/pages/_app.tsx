import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

import withTwindApp from '@twind/next/shim/app'
import twindConfig from 'config/twind.config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App Boilerplate</title>
        <meta name="description" content="Next App Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-900 text-gray-300">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default withTwindApp(twindConfig, MyApp)
