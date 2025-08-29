import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ThemeToggle } from "../ThemeToggle";
import { MenuIcon } from "lucide-react";

import { MenuTxt } from "./MenuTxt";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const MobileMenu = () => {
  const locale = useLocale();
    const t = useTranslations("common");

  return (
    <nav className="block lg:hidden  ">
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-gray-100 dark:bg-primary-950">
          <SheetHeader>
            <SheetTitle>{t("header-responsive-title")}</SheetTitle>
            {MenuTxt.map((menu) => (
              <Button key={menu.labelEn} asChild variant="ghost">
                <Link
                  href={menu.link}
                  className={"transition-colors  font-medium"}
                >
                   {locale === 'en' ? menu.labelEn : menu.labelFa}
                </Link>
              </Button>
            ))}
                        <ThemeToggle />

            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileMenu;
