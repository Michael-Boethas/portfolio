'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitch({className}) {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      className={`d-flex gap-2 fs-2 fw-bold bg-transparent border-0 ${className}`}
      onClick={toggleLanguage}
    >
      <i className="bi bi-translate"></i>
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}
