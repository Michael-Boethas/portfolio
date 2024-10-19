'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Stack() {
  const { textContent } = useLanguage();

  return (
    <section id="stack" className="bg-lightgrey-25 vh-75">
      <h2 className="fs-1 text-center py-4">{textContent.sections.stack}</h2>
      <div className="container">
        <div></div>
      </div>
    </section>
  );
}
