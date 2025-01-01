'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function NotFound() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className={` ${theme === 'light' ? 'theme-L-bg-404' : 'theme-D-bg-404'} vh-100`}>
      <div className="container d-flex flex-column pt-5">
        <h1 className="text-primary font-404 mx-md-5 px-md-5">404</h1>
        <Image
          className="align-self-end"
          src={'/images/mishmesh-404.webp'}
          alt={`404 error illustration`}
          width={400}
          height={300}
          layout='intrinsic'
          priority
        />
        <p>
          {' '}
          {language === 'fr'
            ? "Pas la moindre page à l'horizon..."
            : 'Not a page in sight...'}
        </p>
        <a href="/home">{language === 'fr' ? 'Accueil' : 'Home'}</a>
      </div>
    </div>
  );
}
