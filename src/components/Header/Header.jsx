'use client';

import { useLanguage } from '../../context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

export default function Header() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();

  return (
    <header
      id="header"
      className={`${theme === 'light' ? 'header__bg-light' : 'header__bg-dark'} d-flex flex-column justify-content-center align-items-center min-vh-100 position-relative`}
    >
      <div className="header__overlay bg-black position-absolute w-100 h-100"></div>

      <div className="w-75 text-center mt-5">
        <h1 className="font-huge text-white fw-bold">
          {textContent.sections.header.slogan}
        </h1>

        <div className="d-flex justify-content-center gap-4 py-5">
          <a
            href={textContent.sections.header.linkedin}
            className="hover--zoom nav-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="devicon-linkedin-plain text-white font-large"></i>
          </a>

          <a
            href={textContent.sections.header.github}
            className="hover--zoom nav-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="devicon-github-plain text-white font-large"></i>
          </a>
        </div>
      </div>

      <Link
        href="#about"
        className="hover--zoom nav-link position-absolute bottom-0 end-0 m-5 mb-sm-4 mb-md-0"
        aria-label="Scroll down to About section"
      >
        <i className="bi bi-chevron-compact-down font-huge text-light"></i>
      </Link>
    </header>
  );
}
