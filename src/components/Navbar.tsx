import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <nav className="fixed top-0 right-0 left-0 flex h-20 w-full items-center justify-between border-b bg-white px-6 shadow dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        {/* Hamburger visible only on small screens */}
        <button onClick={onMenuClick} className="text-gray-800 md:hidden dark:text-gray-200">
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>

        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">AI Studio</div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <span className="text-gray-700 dark:text-gray-300">Ashish</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600"
        />
      </div>
    </nav>
  )
}
