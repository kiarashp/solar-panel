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

const MobileMenu = () => {
  return (
    <nav className="block lg:hidden  ">
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-gray-100 dark:bg-primary-950">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            {MenuTxt.map((menu) => (
              <Button key={menu.label} asChild variant="ghost">
                <Link
                  href={menu.link}
                  className={"transition-colors  font-medium"}
                >
                  {menu.label}
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
