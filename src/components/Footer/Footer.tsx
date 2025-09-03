"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import ContactForm from "./ContactForm";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { language, textContent } = useLanguage();
  const { theme } = useTheme();
  const available = process.env.NEXT_PUBLIC_AVAILABILITY;
  const location = process.env.NEXT_PUBLIC_LOCATION;
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <footer
      id="footer"
      className={clsx(
        theme === "light"
          ? "theme-L bg-[var(--color-bg-footer)]"
          : "theme-D bg-[var(--color-bg-footer)]",
        "flex w-full flex-col items-center pt-12 pb-6 text-[var(--color-txt-light)]",
      )}
    >
      {/* Contact form modal */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Contact CTA */}
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-12 px-4",
          "md:flex-row xl:gap-20",
        )}
      >
        <button
          type="button"
          className={clsx(
            "glint-effect hover-zoom mt-6 bg-[var(--color-primary)] px-5 py-3 text-2xl",
            "md:px-12 md:py-5 md:text-3xl",
          )}
          onClick={() => setIsFormOpen(true)}
        >
          {textContent.sections.footer.contact_CTA}
        </button>

        <p
          className={clsx(
            "p-3 text-center text-xl",
            "md:w-1/2 md:text-left md:text-2xl",
          )}
        >
          {textContent.sections.footer.message_part_1}
          <strong
            className="font-bold text-[var(--color-primary)]"
            aria-label="Location"
          >
            {location}
          </strong>
          <em className="not-italic">
            {available === "yes"
              ? textContent.sections.footer.available
              : textContent.sections.footer.unavailable}
          </em>
          {textContent.sections.footer.message_part_2}
        </p>
      </div>

      {/* Separation line */}
      <div className="my-4 w-2/3 border-t border-gray-300 md:my-12 md:w-2/5"></div>

      {/* Documents and credentials */}
      <div className="flex flex-col items-center gap-4 pb-6 text-xl font-semibold">
        <a
          className="hover-highlight"
          href={
            language === "fr" ? "documents/CV.FR.pdf" : "documents/CV.ENG.pdf"
          }
          target="_blank"
        >
          {language === "fr" ? "Mon CV" : "Resume"}
        </a>
        <a
          className="hover-highlight"
          href="documents/certificat.pdf"
          target="_blank"
        >
          {language === "fr" ? "Certificat RNCP" : "Certification"}
        </a>
      </div>

      {/* External links */}
      <div className="flex items-center gap-6 p-3 text-xl">
        <span>{textContent.sections.footer.training}</span>

        <a
          className="hover-zoom transition-transform"
          href={
            language === "fr"
              ? "https://www.sorbonne-universite.fr/"
              : "https://www.sorbonne-universite.fr/en"
          }
          target="_blank"
          rel="noopener"
        >
          <Image
            src={"/images/upmc_logo.webp"}
            alt={"UPMC Logo"}
            title={"UPMC"}
            width={80}
            height={40}
            priority
          />
        </a>
        <a
          className="hover-zoom transition-transform"
          href={
            language === "fr"
              ? "https://www.openclassrooms.com/fr"
              : "https://www.openclassrooms.com"
          }
          target="_blank"
          rel="noopener"
        >
          <Image
            src={"/images/ocr_logo.webp"}
            alt={"OpenClassrooms Logo"}
            title={"OpenClassrooms"}
            width={40}
            height={40}
            priority
          />
        </a>
      </div>
    </footer>
  );
}
