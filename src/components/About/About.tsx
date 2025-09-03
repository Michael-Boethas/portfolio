"use client";

import Image from "next/image";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function About() {
  const { language, textContent } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={clsx(
        theme === "light"
          ? "theme-L text-[var(--color-txt-dark)]"
          : "theme-D text-[var(--color-txt-light)]",
        "flex flex-col items-center gap-12 bg-[var(--color-bg-about)] px-6 py-16",
      )}
    >
      <h2 className={clsx("py-6 text-center italic", "md:text-left")}>
        {textContent.sections.about.title}
      </h2>
      <div
        className={clsx(
          "flex flex-col gap-12",
          "md:flex-row",
          "xl:w-4/5 xl:gap-28",
          "2xl:w-3/4 2xl:gap-36",
        )}
      >
        <div
          className={clsx(
            "hidden -translate-y-12 flex-col justify-center gap-3 pl-12",
            "md:flex",
            "xl:border-l-2 xl:border-gray-300",
          )}
        >
          <div className="aspect-square w-[200px] xl:w-[250px]">
            <Image
              className="border-primary rounded-full border-4"
              src="/images/ma_tronche.webp"
              alt="Picture of me"
              width={250}
              height={250}
              priority
              role="img"
            />
          </div>
          <span className="flex items-end gap-1 self-end font-mono text-2xl font-bold">
            <i className="bi bi-arrow-90deg-up text-4xl"></i>
            {language === "fr" ? "Michaël" : "Michael"}
          </span>
        </div>
        <div className="flex flex-col gap-3 px-4">
          <p
            className={clsx("text-center text-xl", "md:text-left md:text-2xl")}
          >
            {textContent.sections.about.about_me}
          </p>
        </div>
      </div>
    </section>
  );
}
