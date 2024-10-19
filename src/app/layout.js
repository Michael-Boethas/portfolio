import { LanguageProvider } from '@/context/LanguageContext';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import '../styles/main.scss';

const metadata = {
  title: 'Web Developer Portfolio',
  description:
    'Portfolio of a web developer specializing in front-end and back-end technologies like React and Express.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        /> */}

        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-title" content={metadata.title} />
      </head>

      <body>
        <LanguageProvider>
          {/* <Nav /> */}
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
