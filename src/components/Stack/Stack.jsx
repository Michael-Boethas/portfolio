'use client';

import { useLanguage } from '../../context/LanguageContext';
import Tech from '../../components/Tech/Tech';
import techStack from '../../data/stack.json';

export default function Stack() {
  const { textContent } = useLanguage();

  return (
    <section id="stack" className="bg-lightgrey-25 vh-75">
      <h2 className="fs-1 text-center py-4">{textContent.sections.stack}</h2>
      <div className="container d-flex flex-column">
        <div>
          <Tech techData={techStack.html}/>
        </div>
        <div>WORKED WITH</div>
      </div>
    </section>
  );
}
