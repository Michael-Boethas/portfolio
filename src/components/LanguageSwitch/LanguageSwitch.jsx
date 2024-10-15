"use client";

import { useLanguage } from "../../context/LanguageContext";

export default function LanguageSwitch() {
  const { setLanguage } = useLanguage();
  
  return (
    <div>
      <button onClick={() => setLanguage("en")}>English</button>
      <button onClick={() => setLanguage("fr")}>Français</button>
    </div>
  );
}
