'use client';

import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';

export default function About() {
  const { textContent } = useLanguage();

  return (
    <section id="about" className="bg-light py-5">
      <div className="container d-md-flex gap-md-5 align-items-center border-start border-3">
        <div className="d-none d-md-block d-flex p-lg-5">
          <Image
            className="rounded-circle border border-5 border-secondary p-1"
            src="/images/ma_tronche.webp"
            alt="Picture of me"
            width={250}
            height={250}
            priority
          />
        </div>
        <div className="d-flex flex-column gap-3 px-4 px-md-5 py-4">
          <h2 className="fs-1 fst-italic text-center text-md-start py-5">
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
