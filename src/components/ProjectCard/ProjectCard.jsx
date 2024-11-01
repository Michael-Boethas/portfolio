'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import techStack from '../../data/stack.json';

export default function ProjectCard({ projectData }) {
  const { language } = useLanguage();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <figure className="project-card hover--zoom card shadow rounded-0">
      <Image
        className="project-card__image"
        src={projectData.thumbnail_url}
        alt={`Screenshot of ${projectData.name}`}
        width={400}
        height={300}
        onClick={toggleContent}
        priority
      />
      <figcaption className="card-body" onClick={toggleContent}>
        <div>
          <div className="d-flex gap-2 align-items-center my-2">
            <h3 className="card-title fs-4 m-0 pe-4">{projectData.name}</h3>

            {projectData.stack.map((tech, index) => (
              <div key={index} className="d-flex align-items-center">
                {techStack[tech].icon_url && (
                  <Image
                    src={techStack[tech].icon_url}
                    alt={`${tech.name} icon`}
                    width={30}
                    height={30}
                    className="me-1"
                  />
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`card-text collapse ${isCollapsed ? '' : 'show'}`}>
          <p>{projectData.description}</p>

          <div className="d-flex flex-column gap-2 py-3">
            <a
              href={projectData.project_url}
              className="btn btn-primary rounded-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {language === 'fr' ? 'Projet' : 'Project'}
            </a>
            <a
              href={projectData.codebase_url}
              className="btn btn-primary rounded-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
