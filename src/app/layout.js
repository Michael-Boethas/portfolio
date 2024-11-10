import { LanguageProvider } from '@/context/LanguageContext';
import ViewportWarning from '@/components/ViewportWarning/ViewportWarning';
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

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Web Developer Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of a web developer specializing in front-end and back-end technologies like React and Express."
        />
        <meta
          property="og:image"
          content="https://mishmesh-portfolio.vercel.app/opengraph-image.png?v=2"
        />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mishmesh-portfolio.vercel.app"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/opengraph-image.png" />

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
        <meta name="mobile-web-app-title" content={metadata.title} />
      </head>
      <LanguageProvider>
        <ThemeProvider>
          <body>
            <ViewportWarning />
            <Nav />
            {children}
            <Footer />
          </body>
        </ThemeProvider>
      </LanguageProvider>
    </html>
  );
}
