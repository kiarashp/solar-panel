"use client"
import { Button } from "@/components/ui/button";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const HomeMain = () => {
  const locale = useLocale();

  const t = useTranslations("home");
  return (
    <section
      className="relative bg-gradient-to-r from-primary-600 to-primary-800
           text-white py-20 overflow-hidden "
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Image
          src="/solar/roof.jpeg"
          alt="Solar panels"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10 flex flex-col xpad">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">{t("s1-title")}</h1>
        <h1 className="text-yellow-400 text-5xl lg:text-6xl font-bold mb-8">
          {t("s1-subtitle")}
        </h1>

        <p className="text-xl mb-8 text-blue-100 max-w-2xl">{t("s1-desc")}</p>
        <div
          className={`flex flex-col sm:flex-row gap-4 ${
            locale === "fa" ? "sm:flex-row-reverse justify-end" : ""
          }`}
        >
          <Button variant="yellow" className="flex items-center gap-2">
            {t("s1-button2")}
            {locale === "fa" ? (
              <BsArrowLeft className="text-xl" />
            ) : (
              <BsArrowRight className="text-xl" />
            )}
          </Button>

          <Button>{t("s1-button1")}</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
