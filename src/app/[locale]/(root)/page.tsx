import { BsArrowRight } from "react-icons/bs";
import { MdElectricBolt } from "react-icons/md";
import { BiShield, BiDollar, BiLeaf } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import { useTranslations } from "next-intl";
import HomeMain from "@/components/sections/home/HomeMain";

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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the benefits of switching to solar energy for your home
              or business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-6"
              >
                <div className="flex justify-center mb-4">
                  <MdElectricBolt className="text-yellow-500 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
                <p className="text-gray-600">
                  Our premium solar panels convert up to 22% of sunlight into
                  electricity
                </p>
              </div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-6"
              >
                <div className="flex justify-center mb-4">
                  <BiShield className="text-blue-500 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">25-Year Warranty</h3>
                <p className="text-gray-600">
                  Comprehensive warranty coverage for peace of mind
                </p>
              </div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-6"
              >
                <div className="flex justify-center mb-4">
                  <BiDollar className="text-green-500 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Save Money</h3>
                <p className="text-gray-600">
                  Reduce your electricity bills by up to 90% with solar power
                </p>
              </div>
            </div>
            <div
              data-slot="card"
              className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border text-center hover:shadow-lg transition-shadow"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-6"
              >
                <div className="flex justify-center mb-4">
                  <BiLeaf className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Reduce your carbon footprint and contribute to a cleaner
                  environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to solar energy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                We assess your property and energy needs to design the perfect
                solar solution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Installation
              </h3>
              <p className="text-gray-600">
                Our certified technicians install your solar system with minimal
                disruption
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Saving</h3>
              <p className="text-gray-600">
                Begin generating clean energy and watch your electricity bills
                plummet
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied solar customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
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
                  "SolarPro transformed our home with a seamless installation.
                  Our electricity bills dropped by 85%!"
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Austin, TX</p>
                </div>
              </div>
            </div>
            <div
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
                  "Professional service from start to finish. The team was
                  knowledgeable and efficient."
                </p>
                <div>
                  <p className="font-semibold">Mike Chen</p>
                  <p className="text-sm text-gray-500">Phoenix, AZ</p>
                </div>
              </div>
            </div>
            <div
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
                  "Best investment we've made for our home. The solar panels
                  look great and perform even better."
                </p>
                <div>
                  <p className="font-semibold">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-500">San Diego, CA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3"
            >
              View All Testimonials <BsArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free, no-obligation quote and discover how much you can save
            with solar energy
          </p>
          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-10 rounded-md px-6 has-[&gt;svg]:px-4 bg-yellow-500 hover:bg-yellow-600 text-black"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </section>
    </div>
  );
}
