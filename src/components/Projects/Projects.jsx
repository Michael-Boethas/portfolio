'use client';

import ProjectCard from '../ProjectCard/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { textContent } = useLanguage();

  return (
    <section id="projects" className="bg-lightgrey-25 py-5">
      <h2 className="fs-1 text-center py-4 fst-italic">
        {textContent.sections.projects.title}
      </h2>
      <div className="container d-flex flex-column flex-md-row flex-wrap justify-content-center gap-5 p-5">
        <ProjectCard projectData={textContent.sections.projects.kasa} />
        <ProjectCard
          projectData={textContent.sections.projects.nina_carducci}
        />
      </div>
    </section>
  );
}
