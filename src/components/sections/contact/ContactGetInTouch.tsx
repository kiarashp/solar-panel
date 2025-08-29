import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const ContactGetInTouch = () => {
  const locale = useLocale();
  const t = useTranslations("contact.getInTouch");
  const neededIcons = [
    { component: Phone },
    { component: Mail },
    { component: MapPin },
    { component: Clock },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto xpad">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array(4)
            .fill(null)
            .map((_, index) => {
              const Icon = neededIcons[index].component;

              return (
                <div
                  key={index}
                  data-slot="card"
                  className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
                >
                  <div
                    data-slot="card-content"
                    className="[&amp;:last-child]:pb-6 p-6"
                  >
                    <div className="flex justify-center mb-4">{<Icon />}</div>
                    <h3 className="font-semibold mb-3">
                      {t(`card-title-${index + 1}`)}
                    </h3>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600">
                        <a
                          href="tel:555-123-4567"
                          className="text-blue-600 hover:underline"
                        >
                          {t(`card-subtitle-${index + 1}`)}
                        </a>
                      </p>
                      <p className="text-sm text-gray-600">
                        {t(`card-desc-${index + 1}`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ContactGetInTouch;
