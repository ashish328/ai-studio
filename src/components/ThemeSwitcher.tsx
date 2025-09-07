// src/components/ThemeSwitcher.tsx
import { faAdjust, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../hooks/useTheme'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const themeOrder: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system']

  const handleClick = () => {
    const currentIndex = themeOrder.indexOf(theme)
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length]
    setTheme(nextTheme)
  }

  return (
    <button
      onClick={handleClick}
      className="h-8 w-8 rounded-full bg-gray-200 p-1 text-gray-800 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
      title={`Current: ${theme}`}
    >
      {theme === 'light' && <FontAwesomeIcon icon={faSun} size="sm" />}
      {theme === 'dark' && <FontAwesomeIcon icon={faMoon} size="sm" />}
      {theme === 'system' && <FontAwesomeIcon icon={faAdjust} size="sm" />}
    </button>
  )
}
