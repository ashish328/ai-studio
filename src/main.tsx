import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css'
import { HistoryContextProvider } from './contexts/HistoryContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HistoryContextProvider>
      <App />
    </HistoryContextProvider>
  </StrictMode>
)
