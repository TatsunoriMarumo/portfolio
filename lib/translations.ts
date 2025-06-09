import { en } from "@/lang/en";
import { ja } from "@/lang/ja";
import type { Locale } from "@/types/locale";
import type { Translations } from "@/types/translations";

// 翻訳データをエクスポート
export const translations: Record<Locale, Translations> = {
  en,
  ja,
};
