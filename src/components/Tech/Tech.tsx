"use client";

import clsx from "clsx";
import { useTheme } from "@/context/ThemeContext";

interface ITechData {
  name: string;
  url: string;
  icon_light: string;
  icon_dark: string;
}

interface ITechProps {
  techData: ITechData;
  index: number;
  isVisible: boolean;
}

/**
 * Technology icon holding a link to its website
 */
export default function Tech({ techData, index, isVisible }: ITechProps) {
  const { theme } = useTheme();

  if (!techData) return null;

  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{
        transition:
          "opacity 500ms ease-out, transform 450ms cubic-bezier(0.43, 0.63, 0.42, 1.21)",
        transitionDelay: `${100 + index * 60 + Math.sqrt(index) * 50}ms`,
        willChange: "opacity, transform",
        opacity: isVisible ? "1" : "0",
        transform: isVisible
          ? "translate(0, 0) scale(1)"
          : index % 2 === 0
            ? "translateX(500px) scale(0.1)"
            : "translateY(-500px) scale(0.1)",
      }}
    >
      <a
        href={techData.url}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          theme === "light"
            ? techData.icon_light
            : `${techData.icon_dark} dark-icon-glow`,
          "hover-lift p-2 text-5xl",
          "lg:text-6xl",
        )}
        aria-label={techData.name}
      ></a>
      <p className="text-lg font-bold italic">{techData.name}</p>
    </div>
  );
}
