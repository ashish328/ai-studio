import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="h-20 w-full bg-white dark:bg-gray-900 shadow flex items-center justify-between px-6">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
        AI Studio
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitcher />
        <span className="text-gray-700 dark:text-gray-300">Ashish</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600"
        />
      </div>
    </nav>
  );
}