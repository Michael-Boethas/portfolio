"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function NotFound() {
  const { language } = useLanguage();
  const { theme } = useTheme();

  return (
    <div
      className={` ${theme === "light" ? "theme-L-bg-404" : "theme-D-bg-404"} min-vh-100 d-flex flex-column`}
    >
      <div style={{ height: "60px", width: "100%", background: "black" }}></div>
      <div className="flex-grow-1 d-flex flex-column flex-sm-row justify-content-around align-items-center">
        <div className="font-error align-self-sm-start p-md-5">
          <h1 className="text-primary m-0">404</h1>
          <h2 className="text-primary text-center fst-italic">Not Found</h2>
        </div>
        <Image
          className={` ${theme === "light" ? "" : "opacity-75"} align-self-sm-end `}
          src={"/images/mishmesh-404.webp"}
          alt={"404 error illustration"}
          width={400}
          height={300}
          style={{
            maxWidth: "100%",
          }}
          priority
        />
      </div>
      <div
        className={` ${theme === "light" ? "theme-L-bg-footer" : "theme-D-bg-footer"} d-flex flex-column align-items-center justify-content-around p-5 `}
      >
        <p
          className={` ${theme === "light" ? "theme-L-txt-light" : "theme-D-txt-light"} fs-2`}
        >
          {language === "fr" ? "Rien à l'horizon..." : "Not a page in sight..."}
        </p>
        <Link
          className="hover--zoom bg-primary text-white flex-shrink-0 btn rounded-0 fs-3 px-5 py-3 m-3"
          href="/home"
        >
          {language === "fr" ? "Retour à accueil" : "Take me back home"}
        </Link>
      </div>
    </div>
  );
}
