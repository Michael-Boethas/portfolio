// Context for the application of the language selection across all the elements //////

'use client';

import { createContext, useContext, useState } from 'react';
import en from '../data/content/en.json';
import fr from '../data/content/fr.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Default language
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
