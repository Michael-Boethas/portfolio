'use client';

import { useTheme } from "@/context/ThemeContext"

export default function Tech({ techData }) {
  const { theme } = useTheme();

  return (
    <div className="d-flex flex-column gap-2 align-items-center">
      <i className={`${theme === 'light' ? techData.icon_light : techData.icon_dark} ${theme === 'dark' ? 'dark-icon-glow' : ''}`}></i>
      <p className="fs-6 fw-bold fst-italic">{techData.name}</p>
    </div>
  );
}


