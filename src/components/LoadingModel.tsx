import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'

interface GenerationModalProps {
  isOpen: boolean
  state: 'loading' | 'error'
  attempt?: number
  maxAttempts?: number
  onAbort?: () => void
}

export default function GenerationModal({
  isOpen,
  state,
  attempt = 0,
  maxAttempts = 3,
  onAbort
}: GenerationModalProps) {
  if (!isOpen) return null

  const spinnerColor = state === 'error' ? 'text-red-500' : 'text-blue-500'

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex min-h-1/2 w-full max-w-sm flex-col items-center justify-center space-y-4 rounded-lg bg-gray-900 p-6 text-center shadow-xl">
        <div className="flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            className={`${spinnerColor} text-3xl`}
            aria-label="Loading"
          />
        </div>

        {state === 'loading' && (
          <>
            <h2 className="text-lg font-bold text-white">Generating Your Image</h2>
            <p className="text-sm text-gray-400">
              Please wait a moment while we create your masterpiece.
            </p>
          </>
        )}

        {state === 'error' && (
          <>
            <h2 className="text-lg font-bold text-white">Generation Failed</h2>
            <p className="text-sm text-gray-400">We're sorry, something went wrong. Retrying...</p>

            <button
              disabled
              className="w-full rounded-md bg-gray-700 py-2 text-sm font-semibold text-white"
            >
              Attempt {attempt} of {maxAttempts}
            </button>

            <button
              onClick={onAbort}
              className="w-full rounded-md bg-red-600 py-2 text-sm font-semibold text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none"
            >
              Abort
            </button>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}
