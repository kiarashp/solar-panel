import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";
import ContactCommon from "@/components/sections/contact/ContactCommon";
import ContactFormLocation from "@/components/sections/contact/ContactFormLocation";
import ContactGetInTouch from "@/components/sections/contact/ContactGetInTouch";
import ContactHero from "@/components/sections/contact/ContactHero";

export default function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("contact");

  return (
    <div className="flex flex-col ">
      <ContactHero />
      <ContactGetInTouch/>
      <ContactFormLocation/>
      <ContactCommon/>
    </div>
  );
}
