import { useEffect, useState } from 'react'

export function useError(autoClearMs: number = 3000) {
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!error) return
    const timer = setTimeout(() => setError(null), autoClearMs)
    return () => clearTimeout(timer)
  }, [error, autoClearMs])

  return { error, setError }
}
