import "@/styles/main.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ViewportWarning from "@/components/ViewportWarning/ViewportWarning";
import Header from "@/components/Header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import type { ReactNode } from "react";

export { generateMetadata } from "../metadata";

/**
 * RootLayout component.
 *
 * Wraps all pages under a language route with HTML structure,
 * global providers, and shared components.
 *
 * */
export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        {/* Icons */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* Layout */}
      <body>
        <LanguageProvider initialLanguage={lang}>
          <ThemeProvider>
            <ViewportWarning />
            <Header />
            {children}
          </ThemeProvider>
        </LanguageProvider>
        <GoogleAnalytics gaId="G-TN5C4T5GQ2" />
        <Analytics /> {/* Vercel analytics */}
      </body>
    </html>
  );
}
