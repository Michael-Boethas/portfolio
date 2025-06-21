"use client";

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

export default function ProjectCard({
  projectData,
  index,
  display,
}: IProjectCardProps) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const themePrefix = theme === "light" ? "theme-L-" : "theme-D-";
  let tagColor = "";

  switch (projectData.type) {
    case "frontend":
      tagColor = themePrefix + "frontend-tag";
      break;
    case "backend":
      tagColor = themePrefix + "backend-tag";
      break;
    default:
      tagColor = themePrefix + "fullstack-tag";
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
      className={`project-card hover--zoom card shadow rounded-0 flex-row ${theme === "light" ? "theme-L-bg-project-card" : "theme-D-bg-project-card text-white"}`}
      tabIndex={0}
      onClick={toggleContent}
      onKeyDown={keyDownClick}
      role="button"
      aria-expanded={!isCollapsed}
      style={{
        transition: `opacity 500ms ease ${index * 120}ms, transform 500ms ease ${index * 120}ms`,
        willChange: "opacity, transform",
        opacity: display ? "1" : "0",
        transform: display ? "scale(1)" : "scale(0.8)",
      }}
    >
      <div className={`${tagColor} text-white d-flex flex-column p-2`}>
        {projectData.type.split("").map((letter, index) => {
          return (
            <span className="fst-italic fw-bold" key={index}>
              {letter.toUpperCase()}
            </span>
          );
        })}
      </div>
      <div>
        <Image
          className="project-card__image"
          src={projectData.thumbnail_url}
          alt={`Screenshot of ${projectData.name}`}
          width={400}
          height={300}
          priority
        />
        <figcaption className="card-body">
          <div className="d-flex gap-2 justify-content-between align-items-center">
            <h3 className="card-title">{projectData.name}</h3>
            <div className="d-flex gap-2">
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
                  <div key={index} className="fs-2">
                    <span
                      className={`${theme === "light" ? techData.icon_light : techData.icon_dark} ${theme === "dark" ? "dark-icon-glow" : ""}`}
                    ></span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`card-text collapse p-2 border-top ${isCollapsed ? "" : "show"}`}
          >
            <p>{projectData.description}</p>

            <div className="d-flex flex-column gap-2 py-3">
              <a
                href={projectData.project_url}
                className={`btn btn-primary rounded-0 ${theme === "light" ? "" : "text-white"}`}
                target="_blank"
                rel="noopener noreferrer"
                onKeyDown={keyDownClick}
              >
                {language === "fr" ? "Projet" : "Project"}
              </a>
              <a
                href={projectData.codebase_url}
                className={`btn btn-primary rounded-0 ${theme === "light" ? "" : "text-white"}`}
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
