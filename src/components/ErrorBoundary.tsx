import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="z-60 flex min-h-screen flex-col items-center justify-center bg-black/60 p-6 text-center">
          <h2 className="text-xl font-semibold text-red-600">Something went wrong.</h2>
          {this.state.error && (
            <pre className="mt-2 text-sm whitespace-pre-wrap text-gray-600 dark:text-gray-300">
              {this.state.error.message}
            </pre>
          )}
          <button onClick={this.handleReset} className="btn mt-6">
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
