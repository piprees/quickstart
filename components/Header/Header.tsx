import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { Svg } from 'react-optimized-image'

import ErrorBoundary from '../../util/ErrorBoundary'
import { LoginBar } from '../LoginBar/LoginBar'
import Logo from './assets/logo.svg'

export function Header(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <header className="fixed flex items-center justify-between w-full px-2 py-2 bg-white shadow">
        <Link href="/">
          <a className="flex items-center justify-start" href="/">
            <Svg src={Logo} className="mr-2" />
            <h1 className="text-lg font-bold">{t('common:h1')}</h1>
          </a>
        </Link>
        <LoginBar />
      </header>
    </ErrorBoundary>
  )
}

export default Header
