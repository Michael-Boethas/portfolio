'use client';

import { useTheme } from '@/context/ThemeContext';

export default function Tech({ techData }) {
  const { theme } = useTheme();

  return (
    <div className="hover--lift d-flex flex-column gap-2 align-items-center">
      <a
        href={techData.url}
        target="blank"
        className={`${theme === 'light' ? techData.icon_light : techData.icon_dark} ${theme === 'dark' ? 'dark-icon-glow' : ''}`}
      ></a>
      <p className="fs-6 fw-bold fst-italic">{techData.name}</p>
    </div>
  );
}
