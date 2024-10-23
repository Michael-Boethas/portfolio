'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';

export default function Nav() {
    const { textContent } = useLanguage();

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, []);

    return (
        <nav className="nav--custom container-fluid position-fixed top-0 navbar navbar-expand-lg">
            <div className="container-fluid">
                <LanguageSwitch />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link href="#about" className="nav-link">
                            {textContent.sections.about.title}
                        </Link>
                        <Link href="#projects" className="nav-link">
                            {textContent.sections.projects.title}
                        </Link>
                        <Link href="#stack" className="nav-link">
                            {textContent.sections.stack.title}
                        </Link>
                        <Link href="#contact" className="nav-link">
                            {textContent.sections.contact.title}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
