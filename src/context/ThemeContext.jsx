// Context for the application of the color theme across all the elements ////

'use client';

import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the ThemeContext
export function useTheme() {
  return useContext(ThemeContext);
}
