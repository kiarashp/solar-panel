"use client";
import { BiDollar, BiLeaf, BiShield } from "react-icons/bi";
import { MdElectricBolt } from "react-icons/md";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const HomeWhyChoose = () => {
  const locale = useLocale();

  const t = useTranslations("home");

  const neededIcons = [
    { component: BiLeaf, className: "text-green-600 text-3xl" },
    { component: BiDollar, className: "text-green-500 text-3xl" },
    { component: BiShield, className: "text-blue-500 text-3xl" },
    { component: MdElectricBolt, className: "text-yellow-500 text-3xl" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("s2-title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("s2-subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[0, 1, 2, 3].map((i) => {
            
            const theTitle = t(`s2-box${i+1}-title`);
            const theDesc = t(`s2-box${i+1}-desc`);
            const Icon = neededIcons[i].component;

            return (
              <div
                key={`${i}-${theTitle}`}
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
              >
                <div
                  data-slot="card-content"
                  className="[&amp;:last-child]:pb-6 p-6"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className={neededIcons[i].className} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{theTitle}</h3>
                  <p className="text-gray-600">{theDesc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChoose;
