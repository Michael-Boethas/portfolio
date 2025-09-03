"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import WireframeCube from "./WireframeCube";
import styles from "./Hero.module.css";

/**
 * Landing Hero section with social media links and wireframe cube animation
 **/
export default function Hero() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroSize, setHeroSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const updateSize = () => {
      if (!heroRef.current) return;

      setHeroSize({
        width: heroRef.current.clientWidth,
        height: heroRef.current.clientHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [heroRef]);

  return (
    <div
      id="home"
      ref={heroRef}
      key={textContent.sections.hero.tagline} // Forcing re-render to fix animation glitch due to tagline length discrepancy
      className={clsx(
        theme === "light" ? "theme-L" : "theme-D",
        ` ${styles["bg-animation"]} overflow-clip`,
      )}
    >
      {/* Hero overlay for fade-in transition */}
      <div className={styles["overlay"]}></div>

      {/* Wireframe cube */}
      {heroSize && (
        <WireframeCube
          containerSize={heroSize}
          relativeSize={0.161803398874989}
          position={{ horizontal: 0.5, vertical: 0.25 }}
          className={clsx(heroSize.height < 768 ? "hidden" : "block")}
        />
      )}

      {/* Tagline and links  */}
      <div className="mt-12 w-3/4 text-center">
        <h1
          className={`${styles["tagline--glow"]} flex flex-wrap justify-center gap-4 pt-12 font-extrabold text-white`}
        >
          {/* Splitting into words to map over them individually */}
          {textContent.sections.hero.tagline
            .split(/\s+/)
            .map((word, wordIndex, words) => {
              // For each wordIndex, calculate total number of characters from previous words for smooth offset
              const wordOffset = words
                .slice(0, wordIndex) // Get all previous words
                .reduce((acc, currentWord) => acc + currentWord.length, 0); // Cumulative char count
              return (
                <span key={wordIndex} className="inline-block">
                  {word.split("").map((character, i) => (
                    <span
                      key={i}
                      className={styles["character--drop-in"]}
                      style={{
                        animationDelay: `${60 * (wordOffset + i) + 1600}ms`,
                      }}
                    >
                      {character}
                    </span>
                  ))}
                </span>
              );
            })}
        </h1>

        <div className="flex justify-center gap-6 py-16">
          <a
            href={textContent.sections.hero.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`${styles["social-links--pop-in"]} hover-lift`}
            style={{
              animationDelay: `${4200}ms`,
            }}
          >
            <i
              className="devicon-linkedin-plain text-white"
              style={{ fontSize: "3rem" }}
            ></i>
          </a>

          <a
            href={textContent.sections.hero.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`${styles["social-links--pop-in"]} hover-lift`}
            style={{
              animationDelay: `${4350}ms`,
            }}
          >
            <i
              className="devicon-github-plain text-white"
              style={{ fontSize: "3rem" }}
            ></i>
          </a>
        </div>
      </div>

      {/* Scroll down button */}
      <Link
        href="#about"
        className="hover-zoom absolute right-0 bottom-0 m-4 md:mx-16"
        aria-label="Scroll down to About section"
      >
        <i className="bi bi-chevron-compact-down text-6xl text-white md:text-8xl"></i>
      </Link>
    </div>
  );
}
