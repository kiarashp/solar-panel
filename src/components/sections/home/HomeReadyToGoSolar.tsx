import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

const HomeReadyToGoSolar = () => {
  const locale = useLocale();

  const t = useTranslations("home");

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">{t("s5-title")}</h2>
        <p className="text-xl mb-8 text-blue-100">{t("s5-subTitle")}</p>
        <button
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-yellow-500 hover:bg-yellow-600 text-black"
        >
          {t("s5-button")}
        </button>
      </div>
    </section>
  );
};

export default HomeReadyToGoSolar;
