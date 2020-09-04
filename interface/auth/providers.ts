import Providers from 'next-auth/providers'

import { EXAMPLE_CREDENTIALS_OPTIONS } from './constants'

interface GenericReturnConfig {
  [key: string]: any
}

const PROVIDERS: GenericReturnConfig[] = []

PROVIDERS.push(Providers.Credentials(EXAMPLE_CREDENTIALS_OPTIONS))

export { PROVIDERS }
