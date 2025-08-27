import { Button } from "@/components/ui/button";
import { MenuTxt } from "./MenuTxt";
import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";

const DesktopMenu = () => {
  return (
    <>
      <div className="hidden lg:flex items-center space-x-8 lg:space-x-2">
        {MenuTxt.map((menu) => (
          <Button key={menu.label} asChild variant="ghost">
            <Link href={menu.link} className={"transition-colors  font-medium"}>
              {menu.label}
            </Link>
          </Button>
        ))}
      </div>
      <div className="relative z-50 hidden lg:flex gap-2">
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </>
  );
};

export default DesktopMenu;
