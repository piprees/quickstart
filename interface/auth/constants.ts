export const DATABASE_URL = process.env.DATABASE_URL

export const LINK_SIGN_IN = '/auth/credentials-signin'
export const LINK_SIGN_OUT = '/auth/credentials-signout'

export const EXAMPLE_CREDENTIALS_OPTIONS = {
  id: 'example-credentials',
  name: 'Credentials',
  credentials: {
    username: { label: 'Username', type: 'text', placeholder: 'quickstart' },
    password: { label: 'Password', type: 'password' },
  },
  authorize: async () => {
    const user = {
      id: 1,
      name: 'QuickStart User',
      email: 'user@quickstart.piprees.dev',
    }
    if (typeof user === 'object') return await Promise.resolve(user)
    else return await Promise.resolve(null)
  },
}
