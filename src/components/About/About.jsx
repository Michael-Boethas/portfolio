'use client';

import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';

export default function About() {
  const { textContent } = useLanguage();

  return (
    <section id="about" className="bg-cream-25 py-md-4 py-lg-5">
      <div className="container d-md-flex gap-md-5 align-items-center">
        <div className="d-none d-md-block d-flex p-lg-5">
          <Image
            className="about__photo rounded-circle border border-5 border-primary p-1"
            src="/images/ma_tronche.webp"
            alt="Photo of the web developer"
            width={250}
            height={250}
            // layout="intrinsic"
          />
        </div>
        <div className="d-flex flex-column gap-3 px-4 px-md-5 py-4 py-md-0">
          <h2 className="fs-1 text-center text-md-start">
            {textContent.sections.about}
          </h2>
          <p className="fs-4 text-center text-md-start">
            {textContent.about_me}
          </p>
        </div>
      </div>
    </section>
  );
}
