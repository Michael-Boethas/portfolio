'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button
      className="d-flex align-items-center gap-2 fs-3 fw-bold bg-transparent border-0 ps-2 pe-4 text-white"
      onClick={toggleLanguage}
    >
      {/* <span className="bi bi-translate"></span> */}
      <span className="bi bi-globe-americas"></span>
      <span className="fs-4">{language === 'en' ? 'EN' : 'FR'}</span>
    </button>
  );
}
