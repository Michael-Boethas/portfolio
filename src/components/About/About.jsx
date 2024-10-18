'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { textContent } = useLanguage();

  return (
    <section className="container-fluid">
      <p className="container">{textContent.about_me}</p>
    </section>
  );
}
