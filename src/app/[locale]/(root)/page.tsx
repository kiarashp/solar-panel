import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";
import HomeMain from "@/components/sections/home/HomeMain";
import HomeWhyChoose from "@/components/sections/home/HomeWhyChoose";
import HomeHowItWorks from "@/components/sections/home/HomeHowItWorks";
import HomeWhatOurCustomer from "@/components/sections/home/HomeWhatOurCustomer";
import HomeReadyToGoSolar from "@/components/sections/home/HomeReadyToGoSolar";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <div className="flex flex-col ">
      <HomeMain />
      <HomeWhyChoose />
      <HomeHowItWorks />
      <HomeWhatOurCustomer />
      <HomeReadyToGoSolar />
    </div>
  );
}
