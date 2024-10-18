'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const { textContent } = useLanguage();

  return (
    <header className="header--background d-flex flex-column justify-content-evenly align-items-center min-vh-100 position-relative">
      <div className="header--overlay bg-black position-absolute w-100 h-100"></div>
      <div className="slogan__container w-75 text-center">
        <p className="slogan__text text-white fw-bold">{textContent.slogan}</p>
      </div>
      <i class="bi bi-chevron-compact-down text-light"></i>
    </header>
  );
}
