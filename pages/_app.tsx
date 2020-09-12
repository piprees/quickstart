import '../sections/styles.css'

import { Provider as AuthenticationProvider } from 'next-auth/client'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react'

export function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StrictMode>
      <AuthenticationProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthenticationProvider>
    </StrictMode>
  )
}

export default App
