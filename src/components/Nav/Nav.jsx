'use client';

import Link from 'next/link';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { useLanguage } from '../../context/LanguageContext';

export default function Nav() {
  const { textContent } = useLanguage();

  return (
    <nav className="header__nav">
      <Link href="/about">{textContent.nav.about}</Link>
      <Link href="/projects">{textContent.nav.projects}</Link>
      <Link href="/stack">{textContent.nav.stack}</Link>
      <Link href="/contact">{textContent.nav.contact}</Link>
      <LanguageSwitch />
    </nav>
  );
}

