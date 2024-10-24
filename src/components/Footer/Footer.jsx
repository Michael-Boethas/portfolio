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
      className="bg-black text-light d-flex flex-column flex-md-row align-items-center justify-content-around"
    >
      <div className="d-flex flex-column flex-md-row flex-grow-1 align-items-center">
        <button
          type="button"
          className="shine hover--zoom btn btn-primary text-light fs-2 px-5 py-3 m-5"
          data-bs-toggle="modal"
          data-bs-target="#contact-form"
          aria-label="Open Contact Form"
          aria-controls="contact-form"
        >
          {textContent.sections.footer.contact_CTA}
        </button>

        <div className="d-flex flex-wrap gap-2 text-align-center w-75 w-md-50 p-3">
          <p className="fs-4 m-0">
            {textContent.sections.footer.message_part_1}
          </p>

          {/* Location */}
          <strong
            className="fs-4 m-0 text-primary fw-bold"
            aria-label="Location"
          >
            {location}
          </strong>

          <p className="fs-4 m-0" aria-hidden="true">
            {language === 'fr' ? 'et' : 'and'}
          </p>

          {/* Availability Status */}
          {available === 'yes' ? (
            <em className="text-success fw-bold fs-4" role="status">
              {textContent.sections.footer.available}
              <span className="spinner-grow" role="status"></span>
            </em>

          ) : (
            <em className="text-warning fw-bold fs-4" role="status">
              {textContent.sections.footer.unavailable}
            </em>
          )}

          <p className="fs-4 m-0">
            {textContent.sections.footer.message_part_2}
          </p>
        </div>
      </div>

      <Image
        src={'/images/ocr_logo.webp'}
        alt={'OpenClassrooms Logo'}
        width={50}
        height={50}
        priority
      />
    </footer>
  );
}
