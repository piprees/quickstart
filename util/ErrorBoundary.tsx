import withTranslation from 'next-translate/withTranslation'
import React from 'react'

interface ErrorBoundaryProps {
  i18n: { t: (key: string) => string }
}
interface ErrorBoundaryState {
  hasError: boolean
}
export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    // You can also log the error to an error reporting service
    console.error(error)
  }

  render() {
    const { t } = this.props.i18n
    const hasError = this.state.hasError
    if (hasError)
      return (
        <p className="text-red-800 bg-red-200 error">
          <span role="img" aria-label={t('common:ErrorBoundaryIconLabel')}>
            {t('common:ErrorBoundaryIcon')}
          </span>
          <span>{t('common:ErrorBoundary')}</span>
        </p>
      )
    return this.props.children
  }
}

export default withTranslation(ErrorBoundary)
