'use client';

import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

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
      <LanguageSwitch className="position-absolute text-light top-0 start-0 m-4 m-md-2"/>
      <div className="slogan__container w-75 text-center">
        <h1 className="slogan__text text-white fw-bold">
          {textContent.sections.header.slogan}
        </h1>
      </div>
      <i
        className="bi bi-chevron-compact-down text-light position-absolute bottom-0 end-0 m-5 mb-md-0"
        onClick={scrollDown}
        style={{ cursor: 'pointer' }}
      ></i>
    </header>
  );
}
