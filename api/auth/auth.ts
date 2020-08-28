import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

import { DATABASE_URL } from './constants'
import providers from './providers'

const options = {
  providers,
  database: DATABASE_URL,
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => await NextAuth(req, res, options)
