"use client";

import Link from "next/link";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useLanguage } from "../../context/LanguageContext";

export default function Nav() {
  const { selectedLanguage } = useLanguage();

  return (
    <nav className="header__nav">
      <Link href="/">{selectedLanguage.nav.home}</Link>
      <Link href="/about">{selectedLanguage.nav.about}</Link>
      <LanguageSwitch />
    </nav>
  );
}
