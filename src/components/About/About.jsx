'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function About() {
  const { textContent } = useLanguage();

  return (
    <section id="about" className="container-fluid d-md-flex">
      <div className="about__picture-container"></div>
      <div className="about__text-container bg-primary">
        <p className="fs-2">{textContent.about_me}</p>
      </div>
    </section>
  );
}
