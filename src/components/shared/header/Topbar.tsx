import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
const Topbar = () => {
    const locale = useLocale();
    const t = useTranslations("common");
  return (
    <div className="py-2 bg-gray-950 dark:bg-blue-950 xpad">
      <div className="container mx-auto px-4 flex justify-between items-center text-gray-200 dark:text-gray-400 ">
        <div className="flex items-center space-x-4 ">
          <div className="flex items-center space-x-2">
            <BiPhoneCall />
            <span className="text-sm">{t("header-topBar-phone")}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdEmail />

            <span className="text-sm">info@solarpro.com</span>
          </div>
        </div>
        <div className="text-sm">{t("header-topBar-slogan")}</div>
      </div>
    </div>
  );
};

export default Topbar;
