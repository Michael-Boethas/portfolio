import clsx from "clsx";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useOnVisible } from "@/hooks/useOnVisible";

interface INavProps {
  isCollapsed: boolean;
  isTransparent: boolean;
  toggleCollapse: () => void;
}

interface INavSection {
  title?: string;
  anchor?: string;
}

/**
 * Renders links for sections listed in the localized text content returned by useLanguage
 */
export default function Nav({
  isCollapsed,
  toggleCollapse,
  isTransparent,
}: INavProps) {
  const { textContent } = useLanguage();
  const [navRef, navIsVisible] = useOnVisible<HTMLDivElement>(0.05);

  return (
    <nav
      ref={navRef}
      className={clsx(
        isTransparent && "lg:bg-transparent",
        isCollapsed ? "translate-x-full lg:translate-x-0" : "translate-x-0",
        "absolute top-full right-0 flex w-screen flex-col items-center gap-2 bg-black/95 p-4",
        "transition-transform duration-150",
        "bg-transparent bg-gradient-to-b from-black/95 to-black/70",
        "md:items-end md:gap-4 md:bg-transparent md:bg-gradient-to-l md:from-black/85 md:to-transparent",
        "lg:static lg:flex-row lg:gap-10 lg:bg-none lg:py-2",
      )}
    >
      {Object.values(textContent?.sections ?? {}).map(
        (item: INavSection, index: number) => {
          if (!item.anchor) return null;

          return (
            <Link
              key={item.anchor}
              href={item.anchor}
              onClick={toggleCollapse}
              className={clsx(
                "hover-highlight min-w-max py-1 text-xl font-semibold text-white text-shadow-[0_2px_15px_#fff]",
                "lg:font-normal lg:text-shadow-none",
              )}
              style={{
                transition:
                  "opacity 600ms cubic-bezier(0.43, 0.63, 0.42, 1.21)",
                transitionDelay: `${160 + index * 140}ms`,
                willChange: "opacity",
                opacity: navIsVisible ? "1" : "0",
              }}
            >
              <span className="lg:hidden">&lt;</span>
              <span>
                {item.anchor.endsWith("#footer") ? "Contact" : item.title}
              </span>
              <span className="pl-2 lg:hidden lg:pl-0">/&gt;</span>
            </Link>
          );
        },
      )}
    </nav>
  );
}
