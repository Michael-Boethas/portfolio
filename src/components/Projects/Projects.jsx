"use client";

import ProjectCard from '../ProjectCard/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';

export default function Projects() {
  const { textContent } = useLanguage();

  return (
    <section id="projects" className="bg-lightgrey-25">
      <h2 className="fs-1 text-center py-4 fst-italic">{textContent.sections.projects.title}</h2>
      <ProjectCard projectData={textContent.sections.projects.kasa}/>
      <ProjectCard projectData={textContent.sections.projects.nina_carducci}/>
    </section>
  );
}
