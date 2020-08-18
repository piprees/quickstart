import React from 'react'

export default class ErrorBoundary extends React.Component {
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
    // const hasError = this.state.hasError === true
    // if (hasError) return this.props.children
    return this.props.children
  }
}
