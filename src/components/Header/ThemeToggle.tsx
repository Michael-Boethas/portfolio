"use client";

import { useTheme } from "@/context/ThemeContext";

/**
 * Toggle for the ThemeContext
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="hover-highlight flex items-center text-2xl text-white"
      onClick={toggleTheme}
      aria-label="Theme toggle"
    >
      <span
        // className={`${theme === 'light' ? 'bi-lightbulb-fill' : 'bi-lightbulb'} bi`}
        className={`${theme === "light" ? "bi-sun-fill" : "bi-moon-stars"} bi`}
      ></span>
    </button>
  );
}
