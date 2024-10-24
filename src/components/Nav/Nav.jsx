'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

export default function Nav() {
  const { textContent } = useLanguage();

  useEffect(() => {
    const bootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    bootstrap();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav--custom');
      const scrollPosition = window.scrollY;
      const triggerPoint = 100;

      if (scrollPosition > triggerPoint) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="nav--custom container-fluid position-fixed top-0 navbar navbar-expand-lg">
      <div className="container-fluid">
        <LanguageSwitch />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="d-flex align-items-center">
            <span className="react-brackets fs-1">&lt;</span>
            <span className="bi bi-three-dots fs-6 "></span>
            <span className="react-brackets fs-1"> /&gt;</span>
          </div>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex flex-column align-items-end flex-lg-row gap-md-3">
            <Link href="/" className="nav-link d-flex fs-4">
              <span className="react-brackets">&lt;</span>
              <span className="text-start">
                {' '}
                {textContent.sections.header.title}{' '}
              </span>
              <span className="react-brackets"> /&gt;</span>
            </Link>

            <Link href="#about" className="nav-link d-flex fs-4">
              <span className="react-brackets">&lt;</span>
              <span> {textContent.sections.about.title}</span>
              <span className="react-brackets"> /&gt;</span>
            </Link>

            <Link href="#projects" className="nav-link d-flex fs-4">
              <span className="react-brackets">&lt;</span>
              <span> {textContent.sections.projects.title}</span>
              <span className="react-brackets"> /&gt;</span>
            </Link>

            <Link href="#stack" className="nav-link d-flex fs-4">
              <span className="react-brackets">&lt;</span>
              <span> {textContent.sections.stack.title}</span>
              <span className="react-brackets"> /&gt;</span>
            </Link>

            <Link href="#contact" className="nav-link d-flex fs-4">
              <span className="react-brackets">&lt;</span>
              <span> {textContent.sections.contact.title}</span>
              <span className="react-brackets"> /&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
