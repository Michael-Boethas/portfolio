'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import Tech from '@/components/Tech/Tech';
import techStack from '@/data/stack.json';
import viewportClassTrigger from '@/utils/viewportClassTrigger';
import { useEffect } from 'react';

export default function Stack() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    document
      .querySelectorAll('.viewport-trigger')
      .forEach((techContainer, index) => {
        return viewportClassTrigger(
          techContainer,
          index % 2 === 0
            ? 'viewport-slide-in-from-right'
            : 'viewport-slide-in-from-left'
        );
      });
  }, []);

  return (
    <section
      id="stack"
      className={`${theme === 'light' ? 'theme-L-bg-stack theme-L-txt-dark' : 'theme-D-bg-stack theme-D-txt-light'} py-5`}
    >
      <h2 className="fs-1 text-center py-4 fst-italic">
        {textContent.sections.stack.title}
      </h2>

      <div className="d-flex flex-column align-items-center">
        <h3 className="p-3 mb-5 fw-light">{textContent.sections.stack.main}</h3>

        <div className="viewport-trigger w-50 d-flex flex-column flex-lg-row justify-content-center gap-5 align-items-center">
          <div className="font-large d-flex flex-column">
            <div className="d-flex gap-2">
              <Tech techData={techStack.html} />
              <Tech techData={techStack.css} />
            </div>
            <Tech techData={techStack.typescript} />
          </div>

          <div className="font-large d-flex flex-wrap justify-content-center gap-4">
            <Tech techData={techStack.mongodb} />
            <Tech techData={techStack.express} />
            <Tech techData={techStack.react} />
            <Tech techData={techStack.nodejs} />
          </div>
        </div>

        <div className="h-line-50 mt-5 mb-3"></div>

        <div className="d-flex flex-column align-items-center">
          <h3 className="p-3 mb-5 fw-light text-center">
            {textContent.sections.stack.secondary}
          </h3>

          <div className="viewport-trigger font-large w-75 d-flex flex-wrap justify-content-center gap-5 p-md-5">
            <Tech techData={techStack.nextjs} />
            <Tech techData={techStack.sass} />
            <Tech techData={techStack.bootstrap} />
            <Tech techData={techStack.tailwind} />
            <Tech techData={techStack.swagger} />
            <Tech techData={techStack.postman} />
            <Tech techData={techStack.vercel} />
            <Tech techData={techStack.aws} />
            <Tech techData={techStack.git} />
            <Tech techData={techStack.figma} />
            <Tech techData={techStack.inkscape} />
          </div>
        </div>
      </div>
    </section>
  );
}
