import { createContext, useContext } from 'react'

import type { GenerateImageResponse as HistoryItem } from '../types'

interface HistoryContext {
  history: HistoryItem[]
  addHistory: (item: HistoryItem) => void
  selectedHistory: HistoryItem | null
  setSelectedHistory: (item: HistoryItem | null) => void
}

export const HistoryContext = createContext<HistoryContext | null>(null)

export function useHistory() {
  const ctx = useContext(HistoryContext)
  if (!ctx) throw new Error('useHistory must be inside HistoryContextProvider')
  return ctx
}
