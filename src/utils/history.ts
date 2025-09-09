import type { GenerateImageResponse } from '../types'

const STORAGE_KEY = 'history'

export function getHistory(): GenerateImageResponse[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch {
    return []
  }
}

export function addToHistory(item: GenerateImageResponse) {
  const history = getHistory()
  history.unshift(item)
  if (history.length > 5) {
    history.pop()
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
}

export function clearHistory() {
  localStorage.removeItem(STORAGE_KEY)
}
