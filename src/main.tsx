import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { HistoryContextProvider } from './contexts/HistoryContextProvider.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HistoryContextProvider>
      <App />
    </HistoryContextProvider>
  </StrictMode>
)
