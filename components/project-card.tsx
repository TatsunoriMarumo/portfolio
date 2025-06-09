/* --------------------------------------------------------------------------
 * ProjectCard.tsx — React 19 stable-optimized
 * ------------------------------------------------------------------------*/
"use client";

import Image from "next/image";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Play,
  FileText,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import ImageModal from "@/components/image-modal";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TechIcon from "./tech-icon";
import { cn } from "@/lib/utils";
import type { Project, DatePoint } from "@/types/project";
import type { TranslationKey } from "@/types/translations";

/* ────── Constants ────── */
const MONTH_KEYS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

/* ────── Helpers ────── */
const formatDate = (
  lang: "ja" | "en",
  translate: (k: TranslationKey) => string,
  { month, year }: DatePoint
) =>
  lang === "ja"
    ? `${year}年${translate(MONTH_KEYS[month - 1])}`
    : `${translate(MONTH_KEYS[month - 1])} ${year}`;

/* ────── Component ────── */
export default function ProjectCard({ project }: { project: Project }) {
  const { language, translate } = useLanguage();

  /* 1. Embla handles --------------------------------------------------- */
  const [api, setApi] = useState<CarouselApi>();
  const [lastIndex, setLastIndex] = useState(0);
  const targetRef = useRef(0);
  const [, force] = useState({}); // 軽量 rerender 用

  /* 2. 派生データ ------------------------------------------------------ */
  const dateRangeStr = useMemo(() => {
    const { start, end } = project.dateRange;
    if (!end) return formatDate(language, translate, start);

    // 同年
    if (start.year === end.year) {
      if (start.month === end.month)
        return formatDate(language, translate, start);
      const sM = translate(MONTH_KEYS[start.month - 1]);
      const eM = translate(MONTH_KEYS[end.month - 1]);
      return language === "ja"
        ? `${start.year}年${sM}〜${eM}`
        : `${sM} - ${eM} ${start.year}`;
    }
    // 異なる年
    return language === "ja"
      ? `${formatDate(language, translate, start)}〜${formatDate(
          language,
          translate,
          end
        )}`
      : `${formatDate(language, translate, start)} - ${formatDate(
          language,
          translate,
          end
        )}`;
  }, [language, translate, project.dateRange]);

  const availableLinks = useMemo(
    () =>
      [
        project.siteLink && {
          href: project.siteLink,
          label: translate("projectSiteButton"),
          icon: ExternalLink,
        },
        project.demoLink && {
          href: project.demoLink,
          label: translate("projectDemoButton"),
          icon: Play,
        },
        project.documentationLink && {
          href: project.documentationLink,
          label: translate("projectDocumentationButton"),
          icon: FileText,
        },
        project.githubLink && {
          href: project.githubLink,
          label: translate("projectGithubRepo"),
          icon: Github,
        },
      ].filter(Boolean) as {
        href: string;
        label: string;
        icon: typeof ExternalLink;
      }[],
    [project, translate]
  );

  /* 3. Embla events ---------------------------------------------------- */
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      targetRef.current = api.selectedScrollSnap();
      force({}); // dot & button refresh
    };
    const handleInit = () => {
      const last = api.scrollSnapList().length - 1;
      setLastIndex(last);
      handleSelect();
    };

    handleInit();
    api.on("select", handleSelect);
    api.on("reInit", handleInit);

    return () => {
      api.off("select", handleSelect);
      api.off("reInit", handleInit);
    };
  }, [api]);

  /* 4. Prev / Next ----------------------------------------------------- */
  const safeScrollNext = useCallback(() => {
    if (!api || targetRef.current >= lastIndex) return;
    api.scrollTo(++targetRef.current);
    force({});
  }, [api, lastIndex]);

  const safeScrollPrev = useCallback(() => {
    if (!api || targetRef.current <= 0) return;
    api.scrollTo(--targetRef.current);
    force({});
  }, [api]);

  const disablePrev = targetRef.current === 0;
  const disableNext = targetRef.current === lastIndex;

  /* 5. JSX ------------------------------------------------------------- */
  return (
    <Card className="flex h-full flex-col overflow-hidden border-sage-green bg-light-gray shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* IMAGE / CAROUSEL */}
      <div className="relative h-48 w-full">
        {project.images.length > 1 ? (
          <div className="relative h-full w-full">
            <Carousel className="h-full w-full" setApi={setApi}>
              <CarouselContent>
                {project.images.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="px-12">
                      <ImageModal
                        images={project.images}
                        currentIndex={i}
                        title={translate(project.titleKey)}
                      >
                        <div className="relative h-48 w-full cursor-pointer">
                          <Image
                            src={src || "/placeholder.svg"}
                            alt={`${translate(project.titleKey)} - ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </ImageModal>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Prev / Next buttons */}
            <button
              aria-label="Prev"
              onClick={safeScrollPrev}
              disabled={disablePrev}
              className={cn(
                "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-dark-navy/80 p-2 text-light-gray transition-colors hover:bg-dark-navy cursor-pointer",
                disablePrev && "cursor-default opacity-50"
              )}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              aria-label="Next"
              onClick={safeScrollNext}
              disabled={disableNext}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-dark-navy/80 p-2 text-light-gray transition-colors hover:bg-dark-navy cursor-pointer",
                disableNext && "cursor-default opacity-50"
              )}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <ImageModal
            images={project.images}
            currentIndex={0}
            title={translate(project.titleKey)}
          >
            <div className="relative h-48 w-full cursor-pointer">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={translate(project.titleKey)}
                fill
                className="object-cover"
              />
            </div>
          </ImageModal>
        )}

        {/* Dots */}
        {project.images.length > 1 && (
          <div className="flex justify-center py-4 bg-light-gray">
            <div className="flex gap-1">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors",
                    i === targetRef.current
                      ? "bg-soft-blue"
                      : "bg-sage-green/50"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CONTENT */}
      <CardContent className="flex-grow pt-4">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h3 className="flex-1 text-xl font-bold leading-tight text-dark-navy">
            {translate(project.titleKey)}
          </h3>
          <div className="flex flex-shrink-0 items-center text-sm text-dark-teal">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{dateRangeStr}</span>
          </div>
        </div>

        <p className="mb-4 leading-relaxed text-dark-navy/70">
          {translate(project.descriptionKey)}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              className="border-sage-green/30 bg-sage-green text-dark-navy hover:bg-sage-green/80"
            >
              <TechIcon tech={tag} size={14} />
              <span>{tag}</span>
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* FOOTER */}
      {availableLinks.length > 0 && (
        <CardFooter className="flex flex-col items-start gap-3 border-t border-sage-green/50 pt-4">
          {availableLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-dark-navy transition-colors hover:text-dark-teal"
            >
              <Icon className="mr-1 h-3 w-3" />
              {label}
            </a>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
