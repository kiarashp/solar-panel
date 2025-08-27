"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="ring-0 focus-visible:ring-0">
            {theme === "system" ? (
              <SunMoon />
            ) : theme === "dark" ? (
              <MoonIcon />
            ) : (
              <SunIcon />
            )}
            {theme}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white dark:bg-primary-950 shadow-sm p-3 space-y-2">
          <DropdownMenuLabel className="font-semibold">
            Appearance
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-700 dark:bg-accent-100  h-0.5 my-1 " />
          <DropdownMenuCheckboxItem
            className="cursor-pointer outline-0 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-sm  px-2"
            checked={theme === "system"}
            onClick={() => setTheme("system")}
          >
            system
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="cursor-pointer outline-0 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-sm px-2"
            checked={theme === "light"}
            onClick={() => setTheme("light")}
          >
            light
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className="cursor-pointer outline-0 hover:bg-primary-100 dark:hover:bg-primary-900 rounded-sm px-2"
            checked={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            dark
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
}
