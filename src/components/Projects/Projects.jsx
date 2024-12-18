'use client';

import ProjectCard from '../ProjectCard/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Projects() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`${theme === 'light' ? 'theme-L-bg-projects theme-L-txt-dark' : 'theme-D-bg-projects theme-D-txt-light'} py-5`}
    >
      <h2 className="fs-1 text-center py-4 fst-italic">
        {textContent.sections.projects.title}
      </h2>
      <div className="container d-flex flex-column flex-sm-row flex-wrap justify-content-center align-items-center align-items-md-start gap-4 gap-lg-5 p-4 p-lg-5">
        <ProjectCard projectData={textContent.sections.projects.kasa} />
        <ProjectCard
          projectData={textContent.sections.projects.nina_carducci}
        />
      </div>
    </section>
  );
}
