'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Welcome() {
  const { textContent } = useLanguage();

  return <div>{textContent.slogan}</div>;
}
