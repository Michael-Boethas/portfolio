import type { Metadata } from "next";
import en from "@/data/locale/en.json";
import fr from "@/data/locale/fr.json";

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

  return {
    title: localeData.metadata.title,
    description: localeData.metadata.description,
    metadataBase: new URL("https://mishmesh-portfolio.vercel.app"),
    alternates: {
      canonical: "https://mishmesh-portfolio.vercel.app",
    },
    openGraph: {
      title: localeData.metadata.title,
      description: localeData.metadata.description,
      url: "https://mishmesh-portfolio.vercel.app",
      type: "website",
      siteName: "Mishmesh | Web developer portfolio",
      images: [
        {
          url: "/opengraph-image.png?v=2",
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
      images: ["/opengraph-image.png?v=2"],
    },
    icons: {
      icon: [
        "/favicon.ico",
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
        {
          url: "/web-app-manifest-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          url: "/web-app-manifest-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
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
        url: "https://mishmesh.vercel.app/",
      },
    ],
    creator: "Michael Boethas",
    other: {
      "ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Michael Boethas",
        alternateName: "Mishmesh",
        url: "https://mishmesh-portfolio.vercel.app",
        image: "https://mishmesh-portfolio.vercel.app/opengraph-image.png?v=2",
        jobTitle: "Full-Stack Web Developer",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        sameAs: [
          "https://mishmesh.vercel.app/",
          "https://michael-boethas.netlify.app",
          "https://www.linkedin.com/in/micha%C3%ABl-bo%C3%ABthas-89028114b/",
        ],
        description: localeData.metadata.description,
      }),
    },
  };
}
