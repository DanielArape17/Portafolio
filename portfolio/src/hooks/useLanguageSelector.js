"use client";

import { useLanguage } from "@/context/LanguageContext";

export function useLanguageSelector() {
  const { language, toggleLanguage } = useLanguage();

  return {
    language,
    isSpanish: language === "es",
    isEnglish: language === "en",
    toggleLanguage,
  };
}
