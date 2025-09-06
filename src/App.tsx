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
    </div>
  )
}

export default App
