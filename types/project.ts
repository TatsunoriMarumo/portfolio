// /types/project.ts
import type { TranslationKey } from "@/types/translations";

export interface DatePoint {
    year: number;
    month: number;
}

export interface DateRange {
    start: DatePoint;
    end?: DatePoint;
}

export interface Project {
  id: number;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  images: string[];
  tags: string[];
  siteLink?: string;
  demoLink?: string;
  documentationLink?: string;
  githubLink?: string;
  dateRange: DateRange;
}
