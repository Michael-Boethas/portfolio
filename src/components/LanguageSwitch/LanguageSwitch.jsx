'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <button className="language-button" onClick={toggleLanguage}>
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}
