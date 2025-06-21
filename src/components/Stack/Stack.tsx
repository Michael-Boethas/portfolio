"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import useOnVisible from "@/hooks/useOnVisible";
import Tech from "@/components/Tech/Tech";
import techStack from "@/data/stack.json";

export default function Stack() {
  const { textContent } = useLanguage();
  const { theme } = useTheme();
  const [mainStackRef, mainStackIsVisible] = useOnVisible<HTMLDivElement>(
    0.05,
    true
  );
  const [secondaryStackRef, secondaryStackIsVisible] =
    useOnVisible<HTMLDivElement>(0.05, true);

  return (
    <section
      id="stack"
      className={`${theme === "light" ? "theme-L-bg-stack theme-L-txt-dark" : "theme-D-bg-stack theme-D-txt-light"} py-5`}
    >
      <h2 className="fs-1 text-center py-4 fst-italic">
        {textContent.sections.stack.title}
      </h2>

      <div className="d-flex flex-column align-items-center">
        <h3 className="p-3 mb-5 fw-light">{textContent.sections.stack.main}</h3>

        <div
          ref={mainStackRef}
          className="w-50 d-flex flex-column flex-lg-row justify-content-center gap-5 align-items-center"
        >
          <div className="font-large d-flex flex-wrap align-items-center justify-content-center gap-4">
            <div className="d-flex flex-column">
              <div className="d-flex">
                <Tech
                  key={techStack.core[0].name}
                  techData={techStack.core[0]}
                  display={mainStackIsVisible}
                  index={0}
                />
                <Tech
                  key={techStack.core[1].name}
                  techData={techStack.core[1]}
                  display={mainStackIsVisible}
                  index={1}
                />
              </div>
              <Tech
                key={techStack.core[2].name}
                techData={techStack.core[2]}
                display={mainStackIsVisible}
                index={2}
              />
            </div>
            {techStack.primary.map((tech, index) => (
              <Tech
                key={tech.name}
                techData={tech}
                index={index}
                display={mainStackIsVisible}
              />
            ))}
          </div>
        </div>

        <div className="h-line-50 mt-5 mb-3"></div>

        <div className="d-flex flex-column align-items-center">
          <h3 className="p-3 mb-5 fw-light text-center">
            {textContent.sections.stack.secondary}
          </h3>

          <div
            ref={secondaryStackRef}
            className="font-large w-75 d-flex flex-wrap justify-content-center gap-5 p-md-5"
          >
            {techStack.secondary.map((tech, index) => (
              <Tech
                key={tech.name}
                techData={tech}
                index={index + 2}
                display={secondaryStackIsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
