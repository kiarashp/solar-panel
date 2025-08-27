import { Button } from "@/components/ui/button";
import { MenuTxt } from "./MenuTxt";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "../ThemeToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { useLocale } from "next-intl";

const DesktopMenu = () => {
   const locale = useLocale();

  return (
    <>
      <div className="hidden lg:flex items-center space-x-8 lg:space-x-2">
        {MenuTxt.map((menu) => (
          <Button key={menu.labelEn} asChild variant="ghost">
            <Link href={menu.link} className={"transition-colors  font-medium"}>
              {locale === 'en' ? menu.labelEn : menu.labelFa}
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
