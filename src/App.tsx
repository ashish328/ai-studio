import { useState } from 'react'

import './App.css'

import AiGeneration from './components/AiGeneration'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 bg-gray-50 p-2 pt-22 text-gray-900 md:ml-64 dark:bg-gray-800 dark:text-gray-100">
        <AiGeneration />
      </main>
    </div>
  )
}

export default App
