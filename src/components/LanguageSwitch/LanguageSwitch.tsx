"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  // Updating the lang attribute on render
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);

    // Update the URL without redirecting
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split("/");
    if (["en", "fr"].includes(pathSegments[1])) {
      pathSegments[1] = newLanguage;
    }
    const newPath =
      pathSegments.join("/") + window.location.search + window.location.hash;
    window.history.replaceState(null, "", newPath);
  };

  return (
    <button
      className="hover--highlight d-flex align-items-center gap-2 fs-3 fw-bold bg-transparent border-0 ps-2 pe-4 text-white"
      onClick={toggleLanguage}
      aria-label="Language switch"
    >
      <span className="bi bi-globe-americas"></span>
      <span className="fs-4">{language === "en" ? "EN" : "FR"}</span>
    </button>
  );
}
