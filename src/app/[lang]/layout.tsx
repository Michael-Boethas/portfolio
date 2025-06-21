import "@/styles/main.scss";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import ViewportWarning from "@/components/ViewportWarning/ViewportWarning";
import Nav from "@/components/Nav/Nav";
import type { ReactNode } from "react";

export { generateMetadata } from "../metadata";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html>
      <body>
        <LanguageProvider initialLanguage={lang}>
          <ThemeProvider>
            <ViewportWarning />
            <Nav />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
