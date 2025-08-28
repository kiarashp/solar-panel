import { BsStarFill, BsArrowRight } from "react-icons/bs";

import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const HomeWhatOurCustomer = () => {
  const locale = useLocale();

  const t = useTranslations("home");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t("s4-title")}
          </h2>
          <p className="text-xl text-gray-600">{t("s4-subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[0, 1, 2].map((i) => {
            const theDesc = t(`s4-box${i + 1}-desc`);
            const theWriter = t(`s4-box${i + 1}-writer`);
            const theCompany = t(`s4-box${i+1}-company`)

            return (
              <div
                key={i}
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border hover:shadow-lg transition-shadow"
              >
                <div
                  data-slot="card-content"
                  className="[&amp;:last-child]:pb-6 p-6"
                >
                  <div className="flex mb-4">
                    <BsStarFill className="text-yellow-400 text-xl" />
                    <BsStarFill className="text-yellow-400 text-xl" />
                    <BsStarFill className="text-yellow-400 text-xl" />
                    <BsStarFill className="text-yellow-400 text-xl" />
                    <BsStarFill className="text-yellow-400 text-xl" />
                  </div>
                  <p className="text-gray-600 mb-4">
                    &quot;{theDesc}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{theWriter}</p>
                    <p className="text-sm text-gray-500">{theCompany}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3"
          >
            {t("s4-button")} <BsArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeWhatOurCustomer;
