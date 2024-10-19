  'use client';

  import { useLanguage } from '../../context/LanguageContext';

  export default function About() {
    const { textContent } = useLanguage();

    return (
      <section id="about" className="row gx-0 bg-light d-md-flex">
        <div className="about__picture-container col-md-4 d-flex justify-content-center align-items-center p-4">
          <img className='img-fluid rounded-circle w-50 h-75 w-md-75 h-md-100' src="/images/ma_tronche.webp" alt="Photo of the web developer" />
        </div>
        <div className="about__text-container col-md-8 d-flex justify-content-center">
          <p className="fs-2 w-auto  text-center align-self-center p-5">{textContent.about_me}</p>
        </div>
      </section>
    );
  }
