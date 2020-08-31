import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

import { DATABASE_URL, PAGES } from './constants'
import { PROVIDERS } from './providers'

const options = {
  providers: PROVIDERS,
  database: DATABASE_URL,
  pages: PAGES,
}

export async function auth(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  return await NextAuth(req, res, options)
}
