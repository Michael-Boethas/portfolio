"use client";

import React, { createContext, useContext, useState } from "react";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "../config/languages";
import en from "../data/locale/en.json";
import fr from "../data/locale/fr.json";

const CONTENT: Record<string, typeof en> = { en, fr };

interface ILanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
  supportedLanguages: string[];
  textContent: (typeof CONTENT)["en"];
}

const LanguageContext = createContext<ILanguageContextProps>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  supportedLanguages: SUPPORTED_LANGUAGES,
  textContent: CONTENT[DEFAULT_LANGUAGE],
});

/**
 * Provides language state and localized content to its children.
 */
export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode;
  initialLanguage: string;
}) {
  const [language, setLanguage] = useState(initialLanguage);

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        setLanguage: setLanguage,
        supportedLanguages: SUPPORTED_LANGUAGES,
        textContent: CONTENT[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to access the current language context.
 * @returns {Object} The language context value.
 */
export function useLanguage(): ILanguageContextProps {
  return useContext(LanguageContext);
}
