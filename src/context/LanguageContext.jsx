'use client';

import { createContext, useContext, useState } from 'react';
import en from '../data/locales/en.json';
import fr from '../data/locales/fr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language
  const languagesList = { en, fr };

  return (
    <LanguageContext.Provider
      value={{ language, textContent: languagesList[language], setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext);
};
