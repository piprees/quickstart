import { csrfToken } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import React from 'react'

import { Header } from '../../../components/Header/Header'
import ErrorBoundary from '../../../util/ErrorBoundary'
import { getI18nPaths, getI18nProps, withI18n } from '../../../util/i18n'

export interface SignInProps {
  csrfToken: string
}

export function SignIn({ csrfToken }: SignInProps): JSX.Element {
  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <Head>
        <title>{t('SignIn:pageTitle')}</title>
        <meta name="description" content={t('SignIn:pageDescription')} />
      </Head>
      <Header />
      <div
        data-test-id="Index"
        className="flex flex-col items-center justify-center min-h-full p-2"
      >
        <main>
          <h2>{t('SignIn:h1')}</h2>
          <form method="post" action="/api/auth/callback/credentials">
            <input
              data-test-id="signin-csrf-token"
              name="csrfToken"
              type="hidden"
              defaultValue={csrfToken}
            />
            <label>
              {t('SignIn:username')}
              <input
                data-test-id="signin-username"
                name="username"
                type="text"
              />
            </label>
            <label>
              {t('SignIn:password')}
              <input
                data-test-id="signin-password"
                name="password"
                type="text"
              />
            </label>
            <button data-test-id="signin-submit" type="submit">
              {t('SignIn:submit')}
            </button>
          </form>
        </main>
      </div>
    </ErrorBoundary>
  )
}

SignIn.getInitialProps = async (ctx) => {
  return {
    csrfToken: await csrfToken(ctx),
  }
}

export const getStaticProps = async (ctx) => ({
  props: await getI18nProps(ctx, ['common', 'SignIn']),
})

export const getStaticPaths = async () => ({
  paths: getI18nPaths(),
  fallback: false,
})

export default withI18n(SignIn)
