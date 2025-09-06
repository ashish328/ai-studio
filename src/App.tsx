import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar onMenuClick={() => setSidebarOpen(true)}/>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main
        className="flex-1 *:pt-20 md:ml-64 p-6 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen"
      >
        <h1 className="text-2xl font-bold mb-4">Main Content Area</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam distinctio itaque reiciendis animi incidunt numquam quisquam iure corrupti nam minima consequatur voluptates impedit, dolorem atque deserunt facere laboriosam tempora omnis.
        </p>
      </main>
    </div>
  )
}

export default App
