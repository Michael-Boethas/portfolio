"use client";

import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import techStack from "@/data/stack.json";

interface IProjectData {
  name: string;
  type: string;
  project_url: string;
  codebase_url: string;
  thumbnail_url: string;
  description: string;
  stack: string[];
}

interface IProjectCardProps {
  projectData: IProjectData;
  index: number;
  display: boolean;
}

/**
 * Collapsible card for project overview
 */
export default function ProjectCard({
  projectData,
  index,
  display,
}: IProjectCardProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);

  let tagColor = "";

  switch (projectData.type) {
    case "frontend":
      tagColor = "bg-[var(--color-frontend-tag)]";
      break;
    case "backend":
      tagColor = "bg-[var(--color-backend-tag)]";
      break;
    default:
      tagColor = "bg-[var(--color-fullstack-tag)]";
  }

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Force click on keyDown
  const keyDownClick = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <figure
      className={clsx(
        theme === "light"
          ? "theme-L border-1 border-gray-100 shadow-lg"
          : "theme-D text-[var(--color-txt-light)]",
        isCollapsed && "hover:scale-101 hover:cursor-pointer",
        "flex bg-[var(--color-bg-project-card)]",
        "lg:max-w-max",
      )}
      tabIndex={0}
      onClick={toggleContent}
      onKeyDown={keyDownClick}
      role="button"
      aria-expanded={!isCollapsed}
      style={{
        transition: `opacity 500ms ease ${index * 200}ms, transform 500ms ease ${index * 200}ms`,
        willChange: "opacity, transform",
        opacity: display ? "1" : "0",
        transform: display ? "scale(1)" : "scale(0.8)",
      }}
    >
      {/* Project type tag */}
      <div className={`${tagColor} flex flex-col p-2 text-white`}>
        {projectData.type.split("").map((letter, index) => {
          return (
            <span className="font-bold italic" key={index}>
              {letter.toUpperCase()}
            </span>
          );
        })}
      </div>
      <div>
        <Image
          className={clsx(
            !isCollapsed && "cursor-pointer",
            "h-auto max-w-full",
          )}
          src={projectData.thumbnail_url}
          alt={`Screenshot of ${projectData.name}`}
          width={400}
          height={300}
          priority
        />
        {/* Dropdown description */}
        <figcaption className="max-w-100 p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-xl font-semibold">{projectData.name}</h3>
            <div className="flex gap-2">
              {/* Flatten the primary and secondary stacks into a single array
              and find the technology that matches the current tech */}
              {projectData.stack.map((tech, index) => {
                const techData = [
                  ...techStack.core,
                  ...techStack.primary,
                  ...techStack.secondary,
                ].find((t) => t.name.toLowerCase() === tech.toLowerCase());

                if (!techData) return null;

                return (
                  <div key={index} className="text-2xl">
                    <span
                      className={clsx(
                        theme === "light"
                          ? techData.icon_light
                          : `${techData.icon_dark} dark-icon-glow`,
                      )}
                    ></span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`border-t p-2 ${isCollapsed ? "hidden" : "block"}`}>
            <p className="mt-2">{projectData.description}</p>

            <div className="flex flex-col gap-2 py-3">
              <a
                href={projectData.project_url}
                className={`bg-[var(--color-primary)]/90 px-4 py-2 text-white hover:bg-[var(--color-primary)]`}
                target="_blank"
                rel="noopener noreferrer"
                onKeyDown={keyDownClick}
              >
                {language === "fr" ? "Projet" : "Project"}
              </a>
              <a
                href={projectData.codebase_url}
                className={`bg-[var(--color-primary)]/90 px-4 py-2 text-white hover:bg-[var(--color-primary)]`}
                target="_blank"
                rel="noopener noreferrer"
                onKeyDown={keyDownClick}
              >
                Code
              </a>
            </div>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
