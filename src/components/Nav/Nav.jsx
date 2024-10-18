'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function Nav() {
  const { textContent } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`navbar navbar-expand-md ${isCollapsed ? '' : 'float-start'}`}
    >
      <button
        className={`navbar-toggler-icon d-md-none ${isCollapsed ? '' : 'ms-auto'}`}
        type="button"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
        onClick={toggleNavbar}
      ></button>
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="#about" className="nav-link">
              {textContent.nav.about}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#projects" className="nav-link">
              {textContent.nav.projects}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#stack" className="nav-link">
              {textContent.nav.stack}
            </Link>
          </li>
          <li className="nav-item">
            <Link href="#contact" className="nav-link">
              {textContent.nav.contact}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
