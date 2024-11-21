'use client';

import '@/styles/main.scss';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import ViewportWarning from '@/components/ViewportWarning/ViewportWarning';
import Nav from '@/components/Nav/Nav';


function Metadata() {
    const { textContent } = useLanguage();

    return (
        <>
            <meta charSet="utf-8" />
            <title>{textContent.metadata.title}</title>
            <meta name="description" content={textContent.metadata.description} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={textContent.metadata.title} />
            <meta property="og:description" content={textContent.metadata.description} />
            <meta
                property="og:image"
                content={`${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png?v=2`}
            />
            <meta property="og:image:width" content="512" />
            <meta property="og:image:height" content="512" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL} />

            {/* Twitter Cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={textContent.metadata.title} />
            <meta name="twitter:description" content={textContent.metadata.description} />
            <meta
                name="twitter:image"
                content={`${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png?v=2`}
            />
        </>
    );
}

export default function RootLayout({ children }) {
    return (
        <html lang={process.env.NEXT_PUBLIC_BASE_LANG}>
            <LanguageProvider>
                <ThemeProvider>
                    <head>
                        <Metadata />
                    </head>
                    <body>
                        <ViewportWarning />
                        <Nav />
                        {children}
                    </body>
                </ThemeProvider>
            </LanguageProvider>
        </html>
    );
}
