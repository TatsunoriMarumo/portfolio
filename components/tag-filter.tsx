"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/language-context";
import { TranslationKeyEnum } from "@/types/translations";

const {
  filterByTags,
  filterModeTitle,
  filterModeAnd,
  filterModeOr,
  filterClear,
} = TranslationKeyEnum;

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  filterMode: "and" | "or";
  changeFilterMode: (mode: "and" | "or") => void;
}

export default function TagFilter({
  tags,
  selectedTags,
  toggleTag,
  filterMode,
  changeFilterMode,
}: TagFilterProps) {
  const { translate } = useLanguage();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{translate(filterByTags)}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">{translate(filterModeTitle)}</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="filter-and"
                name="filter-mode"
                checked={filterMode === "and"}
                onChange={() => changeFilterMode("and")}
                className="h-4 w-4"
              />
              <Label htmlFor="filter-and" className="text-sm cursor-pointer">
                {translate(filterModeAnd)}
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="filter-or"
                name="filter-mode"
                checked={filterMode === "or"}
                onChange={() => changeFilterMode("or")}
                className="h-4 w-4"
              />
              <Label htmlFor="filter-or" className="text-sm cursor-pointer">
                {translate(filterModeOr)}
              </Label>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox
                id={`tag-${tag}`}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => toggleTag(tag)}
              />
              <Label
                htmlFor={`tag-${tag}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {tag}
              </Label>
            </div>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <div className="mt-4 pt-4 border-t">
            <button
              onClick={() => selectedTags.forEach((tag) => toggleTag(tag))}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {translate(filterClear)}
            </button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
