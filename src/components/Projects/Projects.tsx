"use client";

import clsx from "clsx";
import { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useOnVisible } from "@/hooks/useOnVisible";

/**
 * Section containing the projects gallery
 */
export default function Projects() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();
  const [projectsRef, isVisible] = useOnVisible<HTMLElement>(0.05, true);

  useEffect(() => {
    const mvgUrl = "https://p6-mon-vieux-grimoire-m6zc.onrender.com/wake-up/";

    const wakeUpMVG = async () => {
      try {
        console.info("Waking up Mon Vieux Grimoire API");
        const response = await fetch(mvgUrl, { method: "GET" });
        console.log("API wake-up response:", await response.text());
      } catch (error) {
        console.error("Failed to wake up the API:", error);
      }
    };
    wakeUpMVG();
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={clsx(
        theme === "light" ? "theme-L" : "theme-D text-[var(--color-txt-light)]",
        "flex flex-col items-center gap-12 bg-[var(--color-bg-projects)] px-8 py-16",
      )}
    >
      <h2 className="py-6 text-center italic">
        {textContent.sections.projects.title}
      </h2>
      <div
        className={clsx(
          "flex flex-col items-center justify-center gap-6 px-4",
          "lg:flex-row lg:flex-wrap lg:items-start lg:justify-center 2xl:gap-16 2xl:px-72",
        )}
      >
        <ProjectCard
          projectData={textContent.sections.projects.kasa}
          index={1}
          display={isVisible}
        />
        <ProjectCard
          projectData={textContent.sections.projects.nina_carducci}
          index={2}
          display={isVisible}
        />
        <ProjectCard
          projectData={textContent.sections.projects.mvg}
          index={3}
          display={isVisible}
        />
        <ProjectCard
          projectData={textContent.sections.projects.cristina_portfolio}
          index={4}
          display={isVisible}
        />
      </div>
    </section>
  );
}
