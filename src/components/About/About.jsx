'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { textContent } = useLanguage();

  return <div className="about-section">{textContent.about_me}</div>;
}
