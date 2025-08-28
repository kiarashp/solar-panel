import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const HomeHowItWorks = () => {
  const locale = useLocale();

  const t = useTranslations("home");
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("s3-title")}
          </h2>
          <p className="text-xl text-gray-600">{t("s3-subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => {
            const theTitle = t(`s3-box${i + 1}-title`);
            const theDesc = t(`s3-box${i + 1}-desc`);
            const colorsclasses = [
              { firstElClass: "bg-blue-100", secondElClass: "text-blue-600" },
              {
                firstElClass: "bg-yellow-100",
                secondElClass: "text-yellow-600",
              },
              { firstElClass: "bg-green-100", secondElClass: "text-green-600" },
            ];
            return (
              <div key={i} className="text-center">
                <div
                  className={`${colorsclasses[i].firstElClass} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}
                >
                  <span
                    className={`text-2xl font-bold ${colorsclasses[i].secondElClass} `}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{theTitle}</h3>
                <p className="text-gray-600">{theDesc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeHowItWorks;
