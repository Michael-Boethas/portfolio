'use client';

import { useTheme } from '@/context/ThemeContext';
import useOnVisible from '@/hooks/useOnVisible';

export default function Tech({ techData, index }) {
  const { theme } = useTheme();
  const [techRef, isVisible] = useOnVisible(0.02, true);

  if (!techData) return null;

  return (
    <div
      ref={techRef}
      className="hover--lift d-flex flex-column gap-2 align-items-center"
      style={{
        transition: 'opacity 500ms ease-out, transform 300ms',
        transitionDelay: `${index * 50 + Math.sqrt(index) * 50}ms`,
        willChange: 'opacity, transform',
        opacity: isVisible ? '1' : '0',
        transform: isVisible
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
