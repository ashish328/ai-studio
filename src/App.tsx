import { Suspense, lazy, useState } from 'react'

import './App.css'
import AiGeneration from './components/AiGeneration'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useHistory } from './contexts/HistoryContext'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { selectedHistory, setSelectedHistory } = useHistory()
  const HistoryPreview = lazy(() => import('./components/HistoryPreview'))

  return (
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* TODO:: Create a new component for the main area and move the subsequent component 
        into it and bring back the HistoryContextProvider. 
      */}
      <ErrorBoundary>
        <main
          role="main"
          className="flex-1 bg-gray-50 p-2 pt-22 text-gray-900 md:ml-64 dark:bg-gray-800 dark:text-gray-100"
        >
          {selectedHistory ? (
            // TODO:: create a Loader component to display as fallback
            <Suspense fallback={null}>
              <HistoryPreview
                item={selectedHistory}
                onClose={() => setSelectedHistory(null)}
                onGenerateNew={() => setSelectedHistory(null)}
              />
            </Suspense>
          ) : (
            <AiGeneration />
          )}
        </main>
      </ErrorBoundary>
    </div>
  )
}

export default App
