'use client';

import { useEffect } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import useOnVisible from '@/hooks/useOnVisible';

export default function Projects() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();
  const [projectsRef, isVisible] = useOnVisible(0.05, true);

  useEffect(() => {
    const mvgUrl = 'https://p6-mon-vieux-grimoire-m6zc.onrender.com/wake-up/';

    const wakeUpMVG = async () => {
      try {
        console.info('Waking up Mon Vieux Grimoire API');
        const response = await fetch(mvgUrl, { method: 'GET' });
        console.log('API wake-up response:', await response.text());
      } catch (error) {
        console.error('Failed to wake up the API:', error);
      }
    };
    wakeUpMVG();
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className={`${theme === 'light' ? 'theme-L-bg-projects theme-L-txt-dark' : 'theme-D-bg-projects theme-D-txt-light'} py-5`}
    >
      <h2 className="fs-1 text-center py-4 fst-italic">
        {textContent.sections.projects.title}
      </h2>
      <div className="container d-flex flex-column flex-sm-row flex-wrap justify-content-center align-items-center align-items-md-start gap-4 gap-lg-5 p-4 p-lg-5">
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
