'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Header() {
  const { textContent } = useLanguage();

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <header className="header--background d-flex flex-column justify-content-center align-items-center min-vh-100 position-relative">
      <div className="header--overlay bg-dark position-absolute w-100 h-100"></div>
      <div className="slogan__container w-75 text-center">
        <p className="slogan__text text-white fw-bold">{textContent.slogan}</p>
      </div>
      <i
        className="bi bi-chevron-compact-down text-light position-absolute bottom-0"
        onClick={scrollDown}
        style={{ cursor: 'pointer' }}
      ></i>
    </header>
  );
}
