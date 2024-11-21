'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
  };

  // Updating the lang attribute on render
  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  return (
    <button
      className="hover--highlight d-flex align-items-center gap-2 fs-3 fw-bold bg-transparent border-0 ps-2 pe-4 text-white"
      onClick={toggleLanguage}
      aria-label="Language switch"
    >
      <span className="bi bi-globe-americas"></span>
      <span className="fs-4">{language === 'en' ? 'EN' : 'FR'}</span>
    </button>
  );
}
