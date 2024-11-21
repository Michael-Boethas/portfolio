'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      className="hover--highlight d-flex align-items-center gap-2 fs-3 fw-bold bg-transparent border-0 ps-2 pe-4 text-white"
      onClick={toggleTheme}
      aria-label="Theme toggle"
    >
      <span
        className={`${theme === 'light' ? 'bi-lightbulb-fill' : 'bi-lightbulb'} bi`}
      ></span>
    </button>
  );
}
