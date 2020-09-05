import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'
import { Svg } from 'react-optimized-image'

import ErrorBoundary from '../../util/ErrorBoundary'
import { LoginBar } from '../LoginBar/LoginBar'

export function Header(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <header className="flex items-center justify-between px-2 py-2 border-b-2 border-gray-600">
        <Link href="/">
          <a className="flex items-center justify-start" href="/">
            <Svg src={require('./assets/logo.svg')} className="mr-2" />
            <h1 className="text-lg font-bold">{t('common:h1')}</h1>
          </a>
        </Link>
        <LoginBar />
      </header>
    </ErrorBoundary>
  )
}

export default Header
