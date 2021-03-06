import React from 'react'
import { UserContextProvider } from '../hooks/authUser'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={'dark'}>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </main>
  )
}
