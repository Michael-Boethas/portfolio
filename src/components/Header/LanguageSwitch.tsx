"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SUPPORTED_LANGUAGES } from "@/config/languages";

/**
 * Switch for the LanguageContext
 * Updates the URL path segment without causing a page reload.
 */
export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  // Updating the lang attribute on render
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    const currentIndex = SUPPORTED_LANGUAGES.indexOf(language);
    const nextIndex = (currentIndex + 1) % SUPPORTED_LANGUAGES.length;
    const newLanguage = SUPPORTED_LANGUAGES[nextIndex];

    setLanguage(newLanguage);

    // Update the URL without redirecting
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/");
    if (SUPPORTED_LANGUAGES.includes(pathSegments[1])) {
      pathSegments[1] = newLanguage;
    }
    const newPath =
      pathSegments.join("/") + window.location.search + window.location.hash;
    window.history.replaceState(null, "", newPath);
  };

  return (
    <button
      className="hover-highlight flex items-center gap-2 text-2xl text-white"
      onClick={toggleLanguage}
      aria-label="Language switch"
    >
      <span className="bi bi-globe-americas"></span>
      <span className="text-xl">{language.toUpperCase()}</span>
    </button>
  );
}
