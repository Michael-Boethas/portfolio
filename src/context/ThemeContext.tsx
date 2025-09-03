"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface IThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<IThemeContextProps>({
  theme: "light", // Default
  setTheme: () => {},
});

/**
 * Provides theme state to its children.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light"); // Default theme

  // Set theme based on user preference
  useEffect(() => {
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(preferredTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to use the ThemeContext
 */
export function useTheme(): IThemeContextProps {
  return useContext(ThemeContext);
}
