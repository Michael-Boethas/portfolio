"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function NotFound() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>404 | Not Found</title>
      </Head>
      <div
        id="404"
        className={clsx(
          theme === "light" ? "theme-L" : "theme-D",
          "flex min-h-screen flex-col bg-[var(--color-bg-404)]",
        )}
      >
        <div className="flex flex-grow flex-col items-center justify-around pt-16 sm:flex-row">
          <div className="font-error flex flex-col text-[var(--color-primary)] lg:self-start lg:py-20">
            <h1 className="text-9xl md:text-[10rem] lg:text-[12rem]">404</h1>
            <h2 className="text-center italic md:text-5xl lg:text-6xl">
              Not Found
            </h2>
          </div>
          <Image
            className={clsx(
              theme === "light" ? "" : "opacity-75",
              "aspect-[3/2] w-60 sm:self-end md:w-80 lg:w-100",
            )}
            src="/images/mishmesh-404.webp"
            alt="404 error illustration"
            width={400}
            height={300}
            priority
          />
        </div>
        <div
          className={clsx(
            theme === "light" ? "theme-L" : "theme-D",
            "flex flex-col items-center gap-10 bg-[var(--color-bg-footer)] p-10",
          )}
        >
          <p
            className={clsx(
              theme === "light" ? "theme-L" : "theme-D",
              "text-3xl text-[var(--color-txt-light)]",
            )}
          >
            {language === "fr"
              ? "Rien à l'horizon..."
              : "Not a page in sight..."}
          </p>
          <Link
            className="bg-[var(--color-primary)] px-10 py-6 text-3xl text-white transition-transform hover:scale-105"
            href="/"
          >
            {language === "fr" ? "Retour à accueil" : "Take me back home"}
          </Link>
        </div>
      </div>
    </>
  );
}
