'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export default function Nav() {
  const { textContent } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  // Trigger opacity depending on scroll position
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

  // Avoid SSR import of bootstrap.js to prevent errors related to unavailable DOM
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
    <nav className="nav-custom position-fixed top-0 left-0 w-100 navbar navbar-expand-lg d-flex flex-lg-row-reverse px-0 px-lg-4 overflow-hidden">
      {/*** Global controls *******/}
      <div className="d-flex gap-1">
        <ThemeToggle />
        <LanguageSwitch />
      </div>

      {/*** Mobile viewport menu toggler ***/}
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
          <span className="bi bi-three-dots fs-6"></span>
          <span className="react-brackets fs-1"> /&gt;</span>
        </div>
      </button>

      {/*** Nav Links *********************/}
      <div
        className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav d-flex flex-column align-items-end me-3 me-sm-0 align-items-sm-center flex-lg-row gap-md-4">
          <Link
            href="/home"
            className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
            onClick={toggleCollapse}
          >
            <span className="react-brackets">&lt;</span>
            <span>{textContent.sections.header.title}</span>
            <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
          </Link>

          <Link
            href="/home/#about"
            className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
            onClick={toggleCollapse}
          >
            <span className="react-brackets">&lt;</span>
            <span>{textContent.sections.about.title}</span>
            <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
          </Link>

          <Link
            href="/home/#projects"
            className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
            onClick={toggleCollapse}
          >
            <span className="react-brackets">&lt;</span>
            <span>{textContent.sections.projects.title}</span>
            <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
          </Link>

          <Link
            href="/home/#stack"
            className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
            onClick={toggleCollapse}
          >
            <span className="react-brackets">&lt;</span>
            <span>{textContent.sections.stack.title}</span>
            <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
          </Link>

          <Link
            href="/home/#contact"
            className="hover--highlight text-white nav-link d-flex fs-5 p-sm-1"
            onClick={toggleCollapse}
          >
            <span className="react-brackets">&lt;</span>
            <span>{textContent.sections.contact.title}</span>
            <span className="react-brackets ps-2 ps-lg-0">/&gt;</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
