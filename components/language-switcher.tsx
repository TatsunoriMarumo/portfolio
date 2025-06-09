"use client";

import { useLanguage } from "@/contexts/language-context";
import { Switch } from "@/components/ui/switch";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "ja" ? "en" : "ja");
  };

  return (
    <div className="flex items-center space-x-2 bg-sage-green/80 backdrop-blur-sm px-4 py-2 rounded-full border border-dark-teal/30 shadow-lg">
      <Switch
        id="language-switch"
        checked={language === "ja"}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-dark-teal data-[state=unchecked]:bg-soft-blue
        cursor-pointer"
      />
      <span className="text-sm font-medium text-dark-navy">JP</span>
    </div>
  );
}
