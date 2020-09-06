import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'
import { Svg } from 'react-optimized-image'

import { Button } from '../../components/Button/Button'
import { Header } from '../../components/Header/Header'
import ErrorBoundary from '../../util/ErrorBoundary'
import { getI18nPaths, getI18nProps, withI18n } from '../../util/i18n'
import HeaderImage from './assets/undraw_Devices.svg'
import Styles from './Index.module.css'
export function Index(): JSX.Element {
  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <Head>
        <title>{t('Index:pageTitle')}</title>
        <meta name="description" content={t('Index:pageDescription')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        data-test-id="Index"
        className="flex flex-col items-center justify-center min-h-full p-2"
      >
        <main className={Styles.Main}>
          <Svg src={HeaderImage} />
          <h2 className={Styles.Title}>{t('Index:h1')}</h2>

          <p className={Styles.Description}>
            {t('Index:intro')}
            <a href="/storybook">{t('Index:link')}</a>
          </p>
          <p className={Styles.Description}>
            {t('Index:githubintro')}
            <a
              href="https://github.com/piprees/quickstart"
              target="_blank"
              rel="noreferrer"
            >
              {t('Index:githublink')}
            </a>
          </p>

          <p className={Styles.Description}>
            {t('Index:testintro')}
            <a href="/storybook">{t('Index:link')}</a>

            <Button
              data-test-id="IndexButton"
              size="large"
              onClick={() => {
                window.alert(`With typescript and Jest`)
              }}
              label={t('Index:testButton')}
            />
          </p>
        </main>
      </div>
    </ErrorBoundary>
  )
}

export const getStaticProps = async (ctx) => ({
  props: await getI18nProps(ctx, ['common', 'Index']),
})

export const getStaticPaths = async () => ({
  paths: getI18nPaths(),
  fallback: false,
})

export default withI18n(Index)
