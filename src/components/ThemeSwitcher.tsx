// src/components/ThemeSwitcher.tsx
import { useTheme } from "../hooks/useTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faAdjust } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const themeOrder: ("light" | "dark" | "system")[] = ["light", "dark", "system"];

  const handleClick = () => {
    const currentIndex = themeOrder.indexOf(theme);
    const nextTheme = themeOrder[(currentIndex + 1) % themeOrder.length];
    setTheme(nextTheme);
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      title={`Current: ${theme}`}
    >
      {theme === "light" && <FontAwesomeIcon icon={faSun} size="sm" />}
      {theme === "dark" && <FontAwesomeIcon icon={faMoon} size="sm" />}
      {theme === "system" && <FontAwesomeIcon icon={faAdjust} size="sm" />}
    </button>
  );
}
