import { type ReactNode, useEffect, useState } from 'react'

import type { GenerateImageResponse as HistoryItem } from '../types'
import { addToHistory, getHistory } from '../utils/history'
import { HistoryContext } from './HistoryContext'

export function HistoryContextProvider({ children }: { children: ReactNode }) {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [selectedHistory, setSelectedHistory] = useState<HistoryItem | null>(null)

  function addHistory(item: HistoryItem) {
    addToHistory(item)
    setHistory(getHistory())
  }

  useEffect(() => {
    setHistory(getHistory())
  }, [])
  return (
    <HistoryContext.Provider value={{ history, addHistory, selectedHistory, setSelectedHistory }}>
      {children}
    </HistoryContext.Provider>
  )
}
