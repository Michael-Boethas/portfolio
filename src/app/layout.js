import { LanguageProvider } from "@/context/LanguageContext";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

const metadata = {
  title: "Web Developer Portfolio",
  description:
    "Portfolio of a web developer specializing in front-end and back-end technologies like React and Express.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta name="apple-mobile-web-app-title" content={metadata.title} />

      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
