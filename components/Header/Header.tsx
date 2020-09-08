import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Img } from 'react-optimized-image'

import ErrorBoundary from '../../util/ErrorBoundary'
import { LoginBar } from '../LoginBar/LoginBar'
import Logo from './assets/logo.svg'

export function Header(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <div className="pb-20">
        <header className="fixed flex items-center justify-between w-full h-20 px-2 py-2 bg-white shadow">
          <Link href="/">
            <a className="flex items-center justify-start" href="/">
              <Img src={Logo} className="flex-none w-10 h-auto mr-1" />
              <p className="text-lg font-bold">{t('common:h1')}</p>
            </a>
          </Link>
          <LoginBar />
        </header>
      </div>
    </ErrorBoundary>
  )
}

export default Header
