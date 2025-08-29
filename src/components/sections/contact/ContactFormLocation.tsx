import { CheckCircle, MapPin, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactFormLocation = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Request Your Free Quote
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Service Areas
            </h2>
            <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <MapPin />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">
                  Serving the Southwest United States
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Cities We Serve</h3>
              <div className="grid grid-cols-2 gap-2">
                {Array(8)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <div key={index} className="flex items-center">
                        <CheckCircle />
                        <span className="text-sm text-gray-700">
                          Austin, TX
                        </span>
                      </div>
                    );
                  })}
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Don't see your city listed? Contact us - we're expanding our
                service areas regularly!
              </p>
            </div>
            <div
              data-slot="card"
              className="text-card-foreground flex flex-col gap-6 rounded-xl border mt-6 bg-yellow-50"
            >
              <div
                data-slot="card-content"
                className="[&amp;:last-child]:pb-6 p-6"
              >
                <h3 className="font-semibold mb-3">Emergency Support</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Need urgent solar system support? Our emergency hotline is
                  available 24/7 for existing customers.
                </p>
                <button
                  data-slot="button"
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5"
                >
                  <Phone />
                  Emergency Hotline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormLocation;
