import '../sections/styles.css'

import { Provider as AuthenticationProvider } from 'next-auth/client'
import type { AppProps } from 'next/app'

export function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthenticationProvider session={pageProps.session}>
      <Component {...pageProps} />
    </AuthenticationProvider>
  )
}

export default App
