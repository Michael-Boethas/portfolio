'use client';

import { useLanguage } from '../../context/LanguageContext';
import Tech from '../../components/Tech/Tech';
import techStack from '../../data/stack.json';

export default function Stack() {
  const { textContent } = useLanguage();

  return (
    <section id="stack" className="bg-lightgrey-25 vh-75">
      <h2 className="fs-1 text-center py-4">{textContent.sections.stack.title}</h2>
      <div className="d-flex flex-column">
        <h3>{textContent.sections.stack.main}</h3>
        <div className='w-75 d-flex align-items-center gap-5'>
          <div className='d-flex flex-column'>
            <div className='d-flex'>
              <Tech techData={techStack.html} className="tech__img--min" />
              <Tech techData={techStack.css} className="tech__img--min" />
            </div>
            <Tech techData={techStack.javascript} className="tech__img--min" />
          </div>
          <Tech techData={techStack.express} />
          <Tech techData={techStack.react} />
          <Tech techData={techStack.nodejs} />

        </div>
        <div>WORKED WITH</div>
      </div>
    </section>
  );
}
