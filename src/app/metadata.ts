import type { Metadata } from "next";
import en from "@/data/locale/en.json";
import fr from "@/data/locale/fr.json";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

/**
 * Generates metadata for the app based on the selected language.
 *
 * @returns {Promise<Metadata>} The metadata object for Next.js.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const localeData = lang === "fr" ? fr : en;

  const ogImage = "/opengraph-image.png?v=2";

  return {
    title: localeData.metadata.title,
    description: localeData.metadata.description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${lang}/`,
      languages: {
        en: `${BASE_URL}/en/`,
        fr: `${BASE_URL}/fr/`,
      },
    },
    openGraph: {
      title: localeData.metadata.title,
      description: localeData.metadata.description,
      url: `${BASE_URL}/${lang}/`,
      type: "website",
      siteName: "Mishmesh | Web developer portfolio",
      images: [
        {
          url: ogImage,
          width: 512,
          height: 512,
          alt: "Mishmesh Portfolio Thumbnail",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: localeData.metadata.title,
      description: localeData.metadata.description,
      images: [ogImage],
    },
    icons: {
      icon: [
        "/favicon.ico",
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
      shortcut: "/favicon.ico",
    },
    manifest: "/site.webmanifest",
    applicationName: "Mishmesh Portfolio",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: "Mishmesh Portfolio",
    },
    keywords: [
      "Mishmesh",
      "Michael Boethas",
      "web developer",
      "full-stack developer",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "portfolio",
    ],
    authors: [
      {
        name: "Michael Boethas",
        url: BASE_URL,
      },
    ],
    creator: "Michael Boethas",
    other: {
      "ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Michael Boethas",
        alternateName: "Mishmesh",
        url: BASE_URL,
        image: `${BASE_URL}${ogImage}`,
        jobTitle: "Full-Stack Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        sameAs: [
          BASE_URL,
          "https://michael-boethas.netlify.app",
          "https://www.linkedin.com/in/micha%C3%ABl-bo%C3%ABthas-89028114b/",
        ],
        description: localeData.metadata.description,
      }),
    },
  };
}
