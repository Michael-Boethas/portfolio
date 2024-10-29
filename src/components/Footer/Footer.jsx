'use client';

import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { language, textContent } = useLanguage();
  const available = process.env.NEXT_PUBLIC_AVAILABILITY;
  const location = process.env.NEXT_PUBLIC_LOCATION;

  return (
    <footer
      id="contact"
      className="bg-black text-light w-100 d-flex flex-column align-items-center p-4"
    >
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 px-4">
        <button
          type="button"
          className="shine hover--zoom flex-shrink-0 btn btn-primary text-light fs-3 px-5 py-3 m-3"
          data-bs-toggle="modal"
          data-bs-target="#contact-form"
          aria-label="Open Contact Form"
          aria-controls="contact-form"
        >
          {textContent.sections.footer.contact_CTA}
        </button>

        <p className="fs-4 text-center text-md-start col-md-6 p-3">
          {textContent.sections.footer.message_part_1}{" "}
          <strong className="text-primary fw-bold" aria-label="Location">
            {location}
          </strong>{" "}
          {language === "fr" ? "et" : "and"}{" "}
          <em
            className={`fw-bold fs-4 fst-normal ${available === "yes" ? "text-success" : "text-warning"
              }`}
            role="status"
          >
            {available === "yes"
              ? textContent.sections.footer.available
              : textContent.sections.footer.unavailable}
          </em>{" "}
          {textContent.sections.footer.message_part_2}
        </p>

      </div>

      <div>
        <div className='fs-5 p-3 d-flex gap-3 align-items-center'>
          <span className='fs-5'>{textContent.sections.footer.training}</span>
          <a className='hover--zoom' href="https://www.openclassrooms.com" target="_blank" rel="noopener noreferrer">
            <Image
              src={'/images/ocr_logo.webp'}
              alt={'OpenClassrooms Logo'}
              title={'OpenClassrooms'}
              width={40}
              height={40}
              priority
            />
          </a>
        </div>

      </div>

    </footer>
  );
}
