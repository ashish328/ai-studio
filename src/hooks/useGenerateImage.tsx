import { useCallback, useEffect, useRef, useState } from 'react'

import type { GenerateImageRequest, GenerateImageResponse } from '../types'
import { generateImageRequest } from '../utils/api'

export function useGenerateImage(maxRetries: number) {
  const [state, setState] = useState<'loading' | 'error'>('loading')
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState<number>(0)
  const [result, setResult] = useState<GenerateImageResponse | null>(null)
  const errorTimer = useRef<number | null>(null)

  const abortControllerRef = useRef<AbortController | null>(null)

  const generate = useCallback(
    async ({ imageDataUrl, prompt, style }: GenerateImageRequest) => {
      setState('loading')
      setError(null)
      setAttempt(0)
      setResult(null)
      console.log(attempt)
      abortControllerRef.current = new AbortController()

      // started from 0 because retries should happen when first attempt is failed so total calls should be 4
      for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
          setAttempt(attempt)

          const res = await generateImageRequest({
            imageDataUrl,
            prompt,
            style,
            signal: abortControllerRef.current.signal
          })

          setResult(res)
          return res
        } catch {
          if (abortControllerRef.current.signal.aborted) {
            setError('Aborted by user')
            break
          } else {
            setState('error')
          }

          if (attempt === 3) {
            setAttempt(4)
            setError('Server is busy, try again later')
          }

          // exponential backoff
          await new Promise((res) => setTimeout(res, 1500 * Math.pow(2, attempt - 1)))
        }
      }

      return null
    },
    [attempt, maxRetries]
  )

  const abort = useCallback(() => {
    abortControllerRef.current?.abort()
  }, [])

  useEffect(() => {
    if (errorTimer.current) {
      clearTimeout(errorTimer.current)
    }
    if (error) {
      errorTimer.current = setTimeout(() => {
        setError(null)
      }, 2000)
    }
  }, [error])

  useEffect(() => {
    return () => {
      if (errorTimer.current) {
        clearTimeout(errorTimer.current)
      }
    }
  }, [])

  return { generate, abort, state, error, attempt, result }
}
