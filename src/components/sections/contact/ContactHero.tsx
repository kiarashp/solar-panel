import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const ContactHero = () => {
  const locale = useLocale();
  const t = useTranslations("contact.hero");

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white ">
      <div className="container mx-auto xpad">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-blue-100">{t("subtitle")}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
