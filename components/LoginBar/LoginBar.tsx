import { useSession } from 'next-auth/client'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

import { PAGES } from '../../interface/auth/constants'
import ErrorBoundary from '../../util/ErrorBoundary'
import { Button } from '../Button/Button'

export function LoginBar(): JSX.Element {
  const [session, loading] = useSession()
  const hasSession = session != null

  const { t } = useTranslation()

  return (
    <ErrorBoundary>
      <div className="flex items-center justify-end space-x-2">
        {hasSession ? (
          <Button
            data-test-id="SignOutButton"
            href={PAGES.signOut}
            label={t('common:signOut')}
          />
        ) : (
          <>
            <Button
              data-test-id="SignInButton"
              disabled={loading}
              href={PAGES.signIn}
              size="small"
              label={t('common:signIn')}
            />
            <Button
              data-test-id="SignUpButton"
              disabled={loading}
              href={PAGES.signIn}
              primary
              label={t('common:signUp')}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  )
}
