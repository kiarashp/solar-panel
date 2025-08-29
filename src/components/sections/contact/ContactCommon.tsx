import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
const ContactCommon = () => {
  const locale = useLocale();
  const t = useTranslations("contact.common");
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Array(3)
            .fill(null)
            .map((_, index) => {
              return (
                <div
                  key={index}
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
                >
                  <div
                    data-slot="card-content"
                    className="[&amp;:last-child]:pb-6 p-6"
                  >
                    <h3 className="font-semibold mb-3">{t(`q${index + 1}`)}</h3>
                    <p className="text-sm text-gray-600">
                      {t(`a${index + 1}`)}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ContactCommon;
