import { signIn, signOut, useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import ErrorBoundary from '../../util/ErrorBoundary'
import { Button } from '../Button/Button'

const ACCOUNT_URL = '/account'

export function LoginBar(): JSX.Element {
  const [session, loading] = useSession()
  const hasSession =
    typeof session === 'object' && typeof session?.user === 'object'

  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <div
        className={`flex items-center justify-end space-x-2 transition-opacity delay-100 duration-500 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {hasSession ? (
          <>
            <Button
              key="login-button-primary"
              data-test-id="AccountButton"
              href={ACCOUNT_URL}
              primary
              size="small"
              label={t('common:account')}
            />
            <Button
              key="login-button-secondary"
              data-test-id="SignOutButton"
              onClick={() => void signOut({})}
              size="small"
              label={t('common:signOut')}
            />
          </>
        ) : (
          <>
            <Button
              key="login-button-primary"
              data-test-id="SignUpButton"
              onClick={() => void signIn(undefined, {})}
              primary
              size="small"
              label={t('common:signUp')}
            />
            <Button
              key="login-button-secondary"
              data-test-id="SignInButton"
              onClick={() => void signIn(undefined, {})}
              size="small"
              label={t('common:signIn')}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  )
}
