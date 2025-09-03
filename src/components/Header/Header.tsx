"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import clsx from "clsx";
import LanguageSwitch from "./LanguageSwitch";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";

/**
 * Header containng Nav menu, language switch and theme toggle
 */
export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isTransparent, setIsTransparent] = useState(false);

  const pathname = usePathname();

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  useEffect(() => {
    // Force opacity on 404 page
    const is404 = document.getElementById("404") !== null;
    if (is404) {
      setIsTransparent(false);
      return;
    }

    // Trigger opacity depending on scroll position
    const toggleOpacity = () => {
      setIsTransparent(window.scrollY < 100);
    };

    toggleOpacity();
    window.addEventListener("scroll", toggleOpacity);
    return () => window.removeEventListener("scroll", toggleOpacity);
  }, [pathname]);

  return (
    <header
      id="header"
      className={clsx(
        isTransparent && "lg:bg-transparent",
        "fixed z-100 flex w-full flex-row-reverse items-center justify-between bg-black/95 p-4",
        "transition-colors duration-300 ease-in-out",
        "lg:flex-row lg:bg-black/85 lg:px-6 lg:py-2",
      )}
    >
      {/* Menu button for small viewports */}
      <button
        className="px-4 lg:hidden"
        type="button"
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
      >
        <div className="hover-highlight flex items-center font-semibold text-white">
          <span className="text-3xl">&lt;</span>
          <span className="bi bi-three-dots text-xl"></span>
          <span className="text-3xl"> /&gt;</span>
        </div>
      </button>

      {/* Nav Links */}
      <Nav
        isCollapsed={isCollapsed}
        toggleCollapse={toggleCollapse}
        isTransparent={isTransparent}
      />

      {/* Global controls */}
      <div className="flex gap-4 lg:gap-8 lg:px-16">
        <ThemeToggle />
        <LanguageSwitch />
      </div>
    </header>
  );
}
