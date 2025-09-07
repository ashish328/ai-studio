import { useState } from 'react'

import './App.css'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-black transition-colors dark:bg-gray-900 dark:text-white">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="min-h-screen flex-1 bg-gray-50 p-6 text-gray-900 *:pt-20 md:ml-64 dark:bg-gray-800 dark:text-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Main Content Area</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam distinctio itaque
          reiciendis animi incidunt numquam quisquam iure corrupti nam minima consequatur voluptates
          impedit, dolorem atque deserunt facere laboriosam tempora omnis.
        </p>
      </main>
    </div>
  )
}

export default App
