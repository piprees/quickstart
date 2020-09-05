import Router from 'next/router'
import { useEffect } from 'react'

import i18nConfig from '../i18n.json'
const { defaultLanguage }: { defaultLanguage: string } = i18nConfig

export default function Index() {
  useEffect(() => void Router.replace(`/${defaultLanguage}`), [])

  return null
}
