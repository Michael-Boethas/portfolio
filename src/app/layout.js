import { LanguageProvider } from '@/context/LanguageContext';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import '../styles/main.scss';
import { ThemeProvider } from '@/context/ThemeContext';

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
        <link
          rel="icon"
          sizes="192x192"
          href="/web-app-manifest-192x192.png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/web-app-manifest-512x512.png"
        />

        {/* Devicon CDN */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="mobile-web-app-title" content={metadata.title} />
      </head>
      <LanguageProvider>
        <ThemeProvider>
          <body>
            <div className="screen-size-warning alert alert-warning mt-5 fs-4 text-center">
              <div className="d-flex flex-column align-items-center">
                <i className="bi bi-exclamation-octagon p-4 fs-1"></i>
                <span>
                  This website is not optimized for screens under 320px wide
                </span>
              </div>
            </div>

            <Nav />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </LanguageProvider>

    </html>
  );
}