import * as React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

import { STORAGE_KEY } from "@/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Lang = "es" | "en";

const LANG_LABEL: Record<Lang, string> = {
  es: "Español",
  en: "English",
};

export default function LanguageSwitcher() {
  const { i18n: i18nFromHook } = useTranslation();
  const current = (i18nFromHook.language?.slice(0, 2) as Lang) || "en";

  const setLang = (lang: Lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Languages className="size-4" />
          <span className="hidden sm:inline">{LANG_LABEL[current]}</span>
          <span className="sm:hidden">{current.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLang("es")}
          className={current === "es" ? "font-medium" : ""}
        >
          Español
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => setLang("en")}
          className={current === "en" ? "font-medium" : ""}
        >
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
