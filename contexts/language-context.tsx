"use client";

import {
  createContext,
  useState,
  type ReactNode,
  use,
} from "react";
import { translations } from "@/lib/translations";
import type { TranslationKey } from "@/types/translations";

type Language = "ja" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (
    key: TranslationKey, 
    params?: Record<string, string | number>
  ) => string;
}


const LanguageContext = createContext<LanguageContextType | null>(null);


export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const translate = (
    key: TranslationKey,
    params?: Record<string, string | number>
  ) => {
    let text = translations[language][key] ?? key;

    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, String(v));
      }
    }
    return text;
  };

  return (
    <LanguageContext value={{ language, setLanguage, translate }}>
      {children}
    </LanguageContext>
  );
}


export function useLanguage() {
  const ctx = use(LanguageContext);
  if (!ctx) throw new Error("LanguageProvider is missing");
  return ctx;
}
