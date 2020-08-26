import { signIn, signOut, signUp, useSession } from 'next-auth/client'
import React from 'react'

import LocaleCY from '../../public/locales/cy/Header.json'
import LocaleEN from '../../public/locales/en/Header.json'
import ErrorBoundary from '../../util/ErrorBoundary'
import { addResource, useTranslation } from '../../util/i18n'
import { Button } from '../Button/Button'
import Styles from './Header.module.css'

// export interface HeaderProps {}

export const Header: React.FC = () => {
  addResource('en', 'Header', LocaleEN)
  addResource('cy', 'Header', LocaleCY)

  const [session] = useSession()
  const hasSession = session != null

  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <header>
        <div className="flex items-center justify-between px-2 py-1 border-b border-gray-600">
          <div>
            <svg
              className={Styles.SVG}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                  fill="#FFF"
                />
                <path
                  d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                  fill="#555AB9"
                />
                <path
                  d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                  fill="#91BAF8"
                />
              </g>
            </svg>
            <h1 className={Styles.Title}>{t('Header:h1')}</h1>
          </div>
          <div className={Styles.Wrapper}>
            {hasSession ? (
              <Button
                size="small"
                onClick={signOut}
                label={t('Header:logOut')}
              />
            ) : (
              <>
                <Button
                  size="small"
                  onClick={signIn}
                  label={t('Header:logIn')}
                />
                <Button
                  primary
                  size="large"
                  onClick={signUp}
                  label={t('Header:signUp')}
                />
              </>
            )}
          </div>
        </div>
      </header>
    </ErrorBoundary>
  )
}

export default Header
