'use client';

import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

export default function Header() {
  const { textContent } = useLanguage();

  return (
    <header id='header' className="header--background d-flex flex-column justify-content-center align-items-center min-vh-100 position-relative">
      <div className="header--overlay bg-dark position-absolute w-100 h-100"></div>

      <div className="slogan__container w-75 text-center">
        <h1 className="slogan__text text-white fw-bold">
          {textContent.sections.header.slogan}
        </h1>

        <div className="d-flex justify-content-center gap-4 py-5">
          <a
            href={textContent.sections.header.linkedin}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-linkedin-plain text-white font--large"></i>
          </a>

          <a
            href={textContent.sections.header.github}
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-plain text-white font--large"></i>
          </a>
        </div>
      </div>

      <Link
        href="#about"
        className="nav-link position-absolute bottom-0 end-0 m-5 mb-sm-4 mb-md-0"
      >
        <i className="bi bi-chevron-compact-down text-light"></i>
      </Link>
    </header>
  );
}
