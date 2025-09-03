"use client";

import clsx from "clsx";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { useOnVisible } from "@/hooks/useOnVisible";
import Tech from "@/components/Tech/Tech";
import techStack from "@/data/stack.json";

/**
 * Section displaying a list of technologies
 */
export default function Stack() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();
  const [mainStackRef, mainStackIsVisible] = useOnVisible<HTMLDivElement>(
    0.05,
    true,
  );
  const [secondaryStackRef, secondaryStackIsVisible] =
    useOnVisible<HTMLDivElement>(0.05, true);

  return (
    <section
      id="stack"
      className={clsx(
        theme === "light"
          ? "theme-L bg-[var(--color-bg-stack)] text-[var(--color-txt-dark)]"
          : "theme-D bg-[var(--color-bg-stack)] text-[var(--color-txt-light)]",
        "flex min-h-screen flex-col gap-12 py-16",
      )}
    >
      <h2 className="py-6 text-center italic">
        {textContent.sections.stack.title}
      </h2>

      <div className="flex flex-col items-center gap-6">
        <h3 className="mb-5 p-3 font-light">
          {textContent.sections.stack.main}
        </h3>

        <div
          ref={mainStackRef}
          className="flex w-1/2 flex-col items-center justify-center lg:flex-row"
        >
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex flex-col">
              <div className="flex">
                <Tech
                  key={techStack.core[0].name}
                  techData={techStack.core[0]}
                  isVisible={mainStackIsVisible}
                  index={0}
                />
                <Tech
                  key={techStack.core[1].name}
                  techData={techStack.core[1]}
                  isVisible={mainStackIsVisible}
                  index={1}
                />
              </div>
              <Tech
                key={techStack.core[2].name}
                techData={techStack.core[2]}
                isVisible={mainStackIsVisible}
                index={2}
              />
            </div>
            {techStack.primary.map((tech, index) => (
              <Tech
                key={tech.name}
                techData={tech}
                index={index}
                isVisible={mainStackIsVisible}
              />
            ))}
          </div>
        </div>

        {/* Separation line */}
        <div className="my-4 w-2/3 outline outline-gray-300 md:my-12 md:w-1/2"></div>

        <h3 className="mb-5 p-3 font-light">
          {textContent.sections.stack.secondary}
        </h3>

        <div className="flex flex-col items-center">
          <div
            ref={secondaryStackRef}
            className="flex w-3/4 flex-wrap justify-center gap-6 p-5 font-bold italic md:p-5"
          >
            {techStack.secondary.map((tech, index) => (
              <Tech
                key={tech.name}
                techData={tech}
                index={index + 2}
                isVisible={secondaryStackIsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
