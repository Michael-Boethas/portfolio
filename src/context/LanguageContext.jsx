// // Context for the application of the language selection across all the elements //////

'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import en from '@/data/content/en.json';
import fr from '@/data/content/fr.json';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const languagesList = { en, fr };
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    const defaultLang = languagesList[browserLang]
      ? browserLang
      : process.env.NEXT_PUBLIC_BASE_LANG;
    setLanguage(defaultLang);
  }, []);

  if (!language) return null;

  return (
    <LanguageContext.Provider
      value={{ language, textContent: languagesList[language], setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
