'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

export default function About() {
  const { language, textContent } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`${theme === 'light' ? 'theme-L-bg-about theme-L-txt-dark' : 'theme-D-bg-about theme-D-txt-light'} py-5`}
    >
      <div className="container d-md-flex gap-md-5 align-items-center">
        <div className="d-none d-md-flex flex-column gap-3 p-4 p-lg-5 border-start border-3">
          <Image
            className="rounded-circle border border-5 border-primary p-1 me-4"
            src="/images/ma_tronche.webp"
            alt="Picture of me"
            width={250}
            height={250}
            priority
            role="img"
          />
          <span className="text-light--grey font-monospace fs-3 fw-bold align-self-end d-flex gap-1 align-items-end">
            <i className="bi bi-arrow-90deg-up fs-1"></i>{ language === 'fr' ? 'Michaël' : 'Michael'}
          </span>
        </div>
        <div className="d-flex flex-column gap-3 px-4 px-lg-5">
          <h2 className="fs-1 fst-italic text-center text-md-start py-4">
            {textContent.sections.about.title}
          </h2>
          <p className="fs-4 text-center text-md-start">
            {textContent.sections.about.about_me}
          </p>
        </div>
      </div>
    </section>
  );
}
