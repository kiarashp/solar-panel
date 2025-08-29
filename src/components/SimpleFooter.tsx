import { BiSun, BiPhoneCall, BiEnvelope, BiMap } from "react-icons/bi";
import { FaFacebook, FaX, FaInstagram, FaLinkedin } from "react-icons/fa6";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

export default function Footer() {
  const locale = useLocale();

  const t = useTranslations("common");
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto xpad py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BiSun className="text-yellow-500 text-4xl" />
              <span className="text-2xl font-bold">
                {t("footer-logo-name")}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{t("footer-desc")}</p>
            <div className="flex space-x-4 text-gray-300">
              <FaFacebook />
              <FaX />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer-col1-title")}</h4>
            <ul className="space-y-2">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  const theQuickLink = t(`footer-quickLink${index + 1}`);
                  return (
                    <li key={index}>
                      <button className="text-gray-300 hover:text-white transition-colors">
                        {theQuickLink}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer-col2-title")}</h4>
            <ul className="space-y-2">
              {Array(5)
                .fill(null)
                .map((_, index) => {
                  const theProduct = t(`footer-prod${index + 1}`);
                  return (
                    <li key={index}>
                      <button className="text-gray-300 hover:text-white transition-colors">
                        {theProduct}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t("footer-col3-title")}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <BiPhoneCall className="text-yellow-500 text-xl" />
                <span className="text-gray-300">{t("footer-phone")}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiEnvelope className="text-yellow-500 text-xl" />

                <span className="text-gray-300">info@solarpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiMap className="text-yellow-500 text-xl" />
                <span className="text-gray-300">{t("footer-address")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-400 text-sm">{t("footer-copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
