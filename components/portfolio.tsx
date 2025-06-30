"use client";

import { useMemo, useState, useCallback } from "react";
import ProjectCard from "./project-card";
import { useLanguage } from "@/contexts/language-context";
import { projectsData } from "@/data/projects-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, ChevronsUpDown } from "lucide-react";
import { TranslationKeyEnum } from "@/types/translations";
import type { Project } from "@/types/project";

/* ------------------------------------------------------------------ */
/*  🏷️  i18n Keys                                                     */
/* ------------------------------------------------------------------ */
const {
  portfolio,
  portfolioDescription,
  filterByTags,
  filterModeTitle,
  filterModeAnd,
  filterModeOr,
  filterClear,
  projectsFoundMessage,
  projectsNotFoundMessage,
} = TranslationKeyEnum;

/* ------------------------------------------------------------------ */
/*  🗓️  Helpers                                                       */
/* ------------------------------------------------------------------ */
const getComparableDate = (range: Project["dateRange"]) =>
  range.end ?? range.start;

const sortProjectsByDate = (projects: Project[]) =>
  [...projects].sort((a, b) => {
    const aDate = getComparableDate(a.dateRange);
    const bDate = getComparableDate(b.dateRange);
    if (aDate.year !== bDate.year) return bDate.year - aDate.year;
    return bDate.month - aDate.month;
  });

/* 全タグを重複排除＆アルファベット順ソート */
const allTags = Array.from(new Set(projectsData.flatMap((p) => p.tags))).sort();

/* ------------------------------------------------------------------ */
/*  📦  Component                                                      */
/* ------------------------------------------------------------------ */
export default function Portfolio() {
  /* 1️⃣  state */
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [filterMode, setFilterMode] = useState<"and" | "or">("and");
  const { translate } = useLanguage();

  /* 2️⃣  callbacks  ─────────────────────────────────────────────── */
  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  }, []);

  const clearTags = useCallback(() => setSelectedTags(new Set()), []);
  const changeFilterMode = useCallback(
    (mode: "and" | "or") => setFilterMode(mode),
    []
  );

  /* 3️⃣  derived data (memoized)  ───────────────────────────────── */
  const filteredAndSortedProjects = useMemo(() => {
    const byTags = projectsData.filter((project) => {
      if (selectedTags.size === 0) return true;
      const has = (t: string) => project.tags.includes(t);
      return filterMode === "and"
        ? [...selectedTags].every(has)
        : [...selectedTags].some(has);
    });
    return sortProjectsByDate(byTags);
  }, [selectedTags, filterMode]);

  /* 4️⃣  render  ────────────────────────────────────────────────── */
  return (
    <>
      {/* Header & Filter Button */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="mb-2 text-4xl font-bold text-dark-navy">
            {translate(portfolio)}
          </h1>
          <p className="text-dark-navy/70">{translate(portfolioDescription)}</p>
        </div>

        {/* Filter Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild aria-label="Filter projects">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-dark-teal/30 bg-sage-green/80 text-dark-navy transition-colors hover:bg-soft-blue/50 hover:text-dark-navy cursor-pointer"
            >
              <SlidersHorizontal className="h-4 w-4" />
              <span>{translate(filterByTags)}</span>
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-56 border-dark-teal bg-light-gray"
          >
            {/* AND / OR */}
            <DropdownMenuLabel className="text-dark-navy">
              {translate(filterModeTitle)}
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={filterMode}
              onValueChange={(v) => changeFilterMode(v as "and" | "or")}
            >
              <DropdownMenuRadioItem value="and" className="text-dark-navy">
                {translate(filterModeAnd)}
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="or" className="text-dark-navy">
                {translate(filterModeOr)}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>

            <DropdownMenuSeparator className="bg-sage-green/50" />

            {/* Tag List */}
            <DropdownMenuLabel className="text-dark-navy">
              {translate(filterByTags)}
            </DropdownMenuLabel>
            <div className="max-h-[40vh] overflow-y-auto sm:max-h-[300px]">
              {allTags.map((tag) => (
                <DropdownMenuItem
                  key={tag}
                  onSelect={(e) => e.preventDefault()}
                >
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={selectedTags.has(tag)}
                      onCheckedChange={() => toggleTag(tag)}
                    />
                    <Label
                      htmlFor={`tag-${tag}`}
                      className="cursor-pointer text-sm font-medium leading-none text-dark-navy peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tag}
                    </Label>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>

            {/* Clear Button */}
            {selectedTags.size > 0 && (
              <>
                <DropdownMenuSeparator className="bg-sage-green/50" />
                <DropdownMenuItem
                  onSelect={clearTags}
                  className="cursor-pointer text-sm text-dark-teal transition-colors hover:text-dark-teal/80"
                >
                  {translate(filterClear)}
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Count */}
      <p className="mb-4 text-dark-navy/70">
        {translate(projectsFoundMessage, {
          count: filteredAndSortedProjects.length,
        })}
      </p>

      {/* Grid */}
      {filteredAndSortedProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="py-10 text-center">
          <p className="mb-4 text-dark-navy/70">
            {translate(projectsNotFoundMessage)}
          </p>
          {selectedTags.size > 0 && (
            <Button variant="ghost" onClick={clearTags}>
              {translate(filterClear)}
            </Button>
          )}
        </div>
      )}
    </>
  );
}
