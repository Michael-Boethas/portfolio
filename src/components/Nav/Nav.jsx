'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Nav() {
  const { textContent } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const toggleOpacity = () => {
    const navbar = document.querySelector('.nav-custom');
    const scrollPosition = window.scrollY;
    const triggerPoint = 100;

    if (scrollPosition > triggerPoint) {
      navbar.classList.add('nav--opacity');
    } else {
      navbar.classList.remove('nav--opacity');
    }
  };

  useEffect(() => {
    const bootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    bootstrap();
  }, []);

  useEffect(() => {
    // Initial check for scroll position
    toggleOpacity();

    window.addEventListener('scroll', toggleOpacity);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', toggleOpacity);
    };
  }, []);

  return (
    <nav className="nav-custom container-fluid position-fixed top-0 navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="d-flex gap-1">
          <ThemeToggle />
          <LanguageSwitch />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <div className="hover--highlight text-white d-flex align-items-center">
            <span className="react-brackets fs-1">&lt;</span>
            <span className="bi bi-three-dots fs-6 "></span>
            <span className="react-brackets fs-1"> /&gt;</span>
          </div>
        </button>
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav d-flex flex-column align-items-end align-items-sm-center flex-lg-row gap-md-4">
            <Link
              href="/"
              className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
              onClick={toggleCollapse}
            >
              <span className="react-brackets">&lt;</span>
              <span>{textContent.sections.header.title}</span>
              <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
            </Link>

            <Link
              href="#about"
              className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
              onClick={toggleCollapse}
            >
              <span className="react-brackets">&lt;</span>
              <span>{textContent.sections.about.title}</span>
              <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
            </Link>

            <Link
              href="#projects"
              className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
              onClick={toggleCollapse}
            >
              <span className="react-brackets">&lt;</span>
              <span>{textContent.sections.projects.title}</span>
              <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
            </Link>

            <Link
              href="#stack"
              className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
              onClick={toggleCollapse}
            >
              <span className="react-brackets">&lt;</span>
              <span>{textContent.sections.stack.title}</span>
              <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
            </Link>

            <Link
              href="#contact"
              className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
              onClick={toggleCollapse}
            >
              <span className="react-brackets">&lt;</span>
              <span>{textContent.sections.contact.title}</span>
              <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
