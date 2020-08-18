import { signIn, signOut, useSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'

import Header from '../../components/Header/Header'
import LocaleCY from '../../public/locales/cy/Index.json'
import LocaleEN from '../../public/locales/en/Index.json'
import ErrorBoundary from '../../util/ErrorBoundary'
import { addResource, useTranslation } from '../../util/i18n'
import Styles from './Index.module.css'
export const Index = () => {
  addResource('en', 'Index', LocaleEN)
  addResource('cy', 'Index', LocaleCY)

  const [session] = useSession()
  const hasSession = session != null
  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <Header
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
      <div className="min-h-full flex flex-col items-center justify-center p-2">
        <Head>
          <title>{t('Index:pageTitle')}</title>
          <meta name="description" content={t('Index:pageDescription')} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={Styles.Main}>
          <h2 className={Styles.Title}>
            {t('Index:h1')} <a href="https://nextjs.org">{t('Index:link')}</a>
          </h2>

          <p className={Styles.Description}>{t('Index:intro')}</p>

          {hasSession ? (
            <button onClick={signIn}>{t('Index:signIn')}</button>
          ) : (
            <button onClick={signOut}>{t('Index:signOut')}</button>
          )}

          <button
            onClick={() => {
              window.alert(`With typescript and Jest`)
            }}
          >
            {t('Index:testButton')}
          </button>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export default Index
