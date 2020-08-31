import { useSession } from 'next-auth/client'
import React from 'react'

import { PAGES } from '../../api/auth/constants'
import ErrorBoundary from '../../util/ErrorBoundary'
import { useTranslation } from '../../util/i18n'
import { Button } from '../Button/Button'

export function LoginBar(): JSX.Element {
  const [session, loading] = useSession()
  const hasSession = session != null

  const { t } = useTranslation('LoginBar')

  return (
    <ErrorBoundary>
      <div className="flex items-center justify-end space-x-2">
        {hasSession ? (
          <Button href={PAGES.signOut} label={t('LoginBar:signOut')} />
        ) : (
          <>
            <Button
              disabled={loading}
              href={PAGES.signIn}
              size="small"
              label={t('LoginBar:signIn')}
            />
            <Button
              disabled={loading}
              href={PAGES.signIn}
              primary
              label={t('LoginBar:signUp')}
            />
          </>
        )}
      </div>
    </ErrorBoundary>
  )
}
