import './App.css'
import ThemeSwitcher from './components/ThemeSwitcher'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar/>
    </div>
  )
}

export default App
