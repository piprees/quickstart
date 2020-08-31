import Providers from 'next-auth/providers'

import { GITHUB_ID, GITHUB_SECRET } from './constants'

interface GenericReturnConfig {
  [key: string]: any
}

const PROVIDERS: GenericReturnConfig[] = []

if (typeof GITHUB_ID === 'string' && typeof GITHUB_SECRET === 'string') {
  PROVIDERS.push(
    Providers.GitHub({
      clientId: GITHUB_ID,
      clientSecret: GITHUB_SECRET,
    })
  )
}

export { PROVIDERS }
