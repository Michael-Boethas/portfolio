'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      className="lang-switch d-flex align-items-center gap-2 fs-4 fw-bold bg-transparent border-0 px-4"
      onClick={toggleLanguage}
    >
      <i className="bi bi-translate"></i>
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}
