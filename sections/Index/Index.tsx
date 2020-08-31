import Head from 'next/head'
import React from 'react'

import Header from '../../components/Header/Header'
import ErrorBoundary from '../../util/ErrorBoundary'
import { useTranslation } from '../../util/i18n'
import Styles from './Index.module.css'

export const Index = (): JSX.Element => {
  const { t } = useTranslation('Index')

  return (
    <ErrorBoundary>
      <Header />
      <div className="min-h-full flex flex-col items-center justify-center p-2">
        <Head>
          <title>{t('Index:pageTitle')}</title>
          <meta name="description" content={t('Index:pageDescription')} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={Styles.Main}>
          <h2 className={Styles.Title}>{t('Index:h1')}</h2>

          <p className={Styles.Description}>{t('Index:intro')}</p>
          <a href="/storybook">{t('Index:link')}</a>
          <a
            href="https://github.com/piprees/quickstart"
            target="_blank"
            rel="noreferrer"
          >
            {t('Index:githublink')}
          </a>

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
