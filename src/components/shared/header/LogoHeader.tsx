import Link from "next/link";
import { BiSun } from "react-icons/bi";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const LogoHeader = () => {
  const locale = useLocale();

  const t = useTranslations("common");

  return (
    <Link href="/" className="flex items-center space-x-2">
      <BiSun className="text-yellow-500 text-4xl" />
      <span className="text-2xl font-bold text-gray-600 dark:text-gray-200">
        {t('header-logo-name')}
      </span>
    </Link>
  );
};

export default LogoHeader;
