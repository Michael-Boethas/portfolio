'use client';

import '@/styles/main.scss';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import ViewportWarning from '@/components/ViewportWarning/ViewportWarning';
import Nav from '@/components/Nav/Nav';

function Metadata() {
  const { textContent } = useLanguage();

  // jsonLd array for structured data about creative works
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: 'Cristina Jiménez Portfolio',
      url: 'https://cristina-jimenez.netlify.app',
      description:
        'A personal portfolio website designed and developed for Cristina Jiménez to showcase her projects and skills.',
      dateCreated: '2025-05-02',
      inLanguage: 'en',
      keywords: [
        'Cristina Jiménez',
        'portfolio',
        'communication',
        'international marketing',
        'content creation',
        'creative projects',
      ],
      creator: {
        '@type': 'Person',
        name: 'Michael Boethas',
        alternateName: 'Mishmesh',
        sameAs: [
          'https://mishmesh.vercel.app/',
          'https://michael-boethas.netlify.app',
          'https://www.linkedin.com/in/micha%C3%ABl-bo%C3%ABthas-89028114b/',
        ],
      },
    },
  ];

  return (
    <>
      <meta charSet="utf-8" />
      <title>{textContent.metadata.title}</title>
      <meta name="description" content={textContent.metadata.description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={textContent.metadata.title} />
      <meta
        property="og:description"
        content={textContent.metadata.description}
      />
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
      <meta
        name="twitter:description"
        content={textContent.metadata.description}
      />
      <meta
        name="twitter:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png?v=2`}
      />

      {/* Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/favicon-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" sizes="192x192" href="/web-app-manifest-192x192.png" />
      <link rel="icon" sizes="512x512" href="/web-app-manifest-512x512.png" />

      {/* Devicon CDN */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      {/* Mobile Web App */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="mobile-web-app-title" content={textContent.metadata.title} />
      {jsonLd.map((jsonLd, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}
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
