'use client';

import { useTheme } from '@/context/ThemeContext';

export default function Tech({ techData, index, display }) {
  const { theme } = useTheme();

  if (!techData) return null;

  return (
    <div
      className="hover--lift d-flex flex-column gap-2 align-items-center"
      style={{
        transition: 'opacity 500ms ease-out, transform 300ms',
        transitionDelay: `${index * 60 + Math.sqrt(index) * 50}ms`,
        willChange: 'opacity, transform',
        opacity: display ? '1' : '0',
        transform: display
          ? 'translate(0, 0) scale(1)'
          : index % 2 === 0
            ? 'translateX(50px) scale(0.2)'
            : 'translateY(-200px) scale(0.2)',
      }}
    >
      <a
        href={techData.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${theme === 'light' ? techData.icon_light : techData.icon_dark} ${theme === 'dark' ? 'dark-icon-glow' : ''}`}
        aria-label={techData.name}
      ></a>
      <p className="fs-6 fw-bold fst-italic">{techData.name}</p>
    </div>
  );
}
