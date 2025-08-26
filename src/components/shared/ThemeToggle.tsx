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
      <DropdownMenuContent className="bg-white dark:bg-primary-950 shadow-sm p-3">
        <DropdownMenuLabel className="font-semibold">Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator className="text-gray-300 bg-accent-100 " />
        <DropdownMenuCheckboxItem className="cursor-pointer outline-0 "
          checked={theme === "system"}
          onClick={() => setTheme("system")}
        >
          system
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="cursor-pointer outline-0"
          checked={theme === "light"}
          onClick={() => setTheme("light")}
        >
          light
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="cursor-pointer outline-0"
          checked={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          dark
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
