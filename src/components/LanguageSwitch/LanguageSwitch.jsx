'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      className="d-flex align-items-center gap-2 fs-5 fw-bold rounded px-2"
      onClick={toggleLanguage}
    >
      <i className="bi bi-translate"></i>
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
