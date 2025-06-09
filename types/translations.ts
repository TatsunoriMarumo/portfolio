import { en } from "@/lang/en";

export type TranslationKey = keyof typeof en;

export const TranslationKeyEnum = Object.keys(en).reduce((acc, key) => {
  acc[key as keyof typeof en] = key;
  return acc;
}, {} as Record<keyof typeof en, string>) as {
  readonly [K in keyof typeof en]: K;
};

export type Translations = Record<TranslationKey, string>;