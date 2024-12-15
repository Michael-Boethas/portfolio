'use client';

import { useTheme } from '@/context/ThemeContext';

export default function Tech({ techData }) {
  const { theme } = useTheme();

  return (
    <div className="hover--lift d-flex flex-column gap-2 align-items-center">
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
