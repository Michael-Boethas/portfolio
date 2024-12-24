'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import techStack from '@/data/stack.json';

export default function ProjectCard({ projectData }) {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Force click on keyDown
  const keyDownClick = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.click();
    }
  };

  return (
    <figure
      className={`project-card hover--zoom card shadow rounded-0 ${theme === 'light' ? 'theme-L-bg-project-card' : 'theme-D-bg-project-card text-white'}`}
      tabIndex={0}
      onClick={toggleContent}
      onKeyDown={keyDownClick}
      role="button"
      aria-expanded={!isCollapsed}
    >
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
            {projectData.stack.map((tech, index) => (
              <div key={index} className="fs-2">
                <span
                  className={`${theme === 'light' ? '' : 'dark-icon-glow'} ${techStack[tech].icon_light}`}
                ></span>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`card-text collapse p-2 border-top ${isCollapsed ? '' : 'show'}`}
        >
          <p>{projectData.description}</p>

          <div className="d-flex flex-column gap-2 py-3">
            <a
              href={projectData.project_url}
              className={`btn btn-primary rounded-0 ${theme === 'light' ? '' : 'text-white'}`}
              target="_blank"
              rel="noopener noreferrer"
              onKeyDown={keyDownClick}
            >
              {language === 'fr' ? 'Projet' : 'Project'}
            </a>
            <a
              href={projectData.codebase_url}
              className={`btn btn-primary rounded-0 ${theme === 'light' ? '' : 'text-white'}`}
              target="_blank"
              rel="noopener noreferrer"
              onKeyDown={keyDownClick}
            >
              Code
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
