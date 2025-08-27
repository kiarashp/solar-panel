"use client";
import { usePathname,useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };
  return (
    <Select value={locale} onValueChange={(value) => switchLocale(value)}>
      <SelectTrigger variant="primary">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">En</SelectItem>
        <SelectItem value="fa">فارسی</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
