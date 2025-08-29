"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);


  const t = useTranslations("common");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Select  value={theme} onValueChange={(value) => setTheme(value)}>
      <SelectTrigger variant="primary">
        {theme === "system" ? (
          <SunMoon />
        ) : theme === "dark" ? (
          <MoonIcon />
        ) : (
          <SunIcon />
        )}
        <SelectValue placeholder="Theme" />
      </SelectTrigger>

      <SelectContent  position="popper" side="bottom">
        <SelectItem  value="system">{t('themeToggle-system')}</SelectItem>
        <SelectItem value="light">{t('themeToggle-light')}</SelectItem>
        <SelectItem value="dark">{t('themeToggle-dark')}</SelectItem>
      </SelectContent>
    </Select>
  );
}
