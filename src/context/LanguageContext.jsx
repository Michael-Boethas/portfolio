"use client";

import { createContext, useContext, useState } from "react";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

// Create context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr"); // Default language
  const languagesList = { en, fr };

  return (
    // The value prop takes an object literal
    <LanguageContext.Provider
      value={{ selectedLanguage: languagesList[language], setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext);
};
