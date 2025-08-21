import { BiPhoneCall, BiSun, BiMenu } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { ThemeToggle } from "./ThemeToggle";
export default function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="bg-primary text-primary-foreground py-2 bg-blue-950">
        <div className="container mx-auto px-4 flex justify-between items-center ">
          <div className="flex items-center space-x-4 ">
            <div className="flex items-center space-x-2">
              <BiPhoneCall />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdEmail />

              <span className="text-sm">info@solarpro.com</span>
            </div>
          </div>
          <div className="text-sm">Free Solar Consultation Available</div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <BiSun className="text-yellow-500 text-4xl" />

            <span className="text-2xl font-bold text-gray-600">SolarPro</span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <button className="transition-colors hover:text-yellow-600 text-yellow-600 font-medium">
              Home
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              About Us
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Services
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Products
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Portfolio
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Testimonials
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              FAQ
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Financing
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Blog
            </button>
            <button className="transition-colors hover:text-yellow-600 text-gray-700">
              Contact
            </button>
          
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[&gt;svg]:px-3 bg-yellow-500 hover:bg-yellow-600 text-white"
            >
              Get Quote
            </button>
          </div>
          <button className="lg:hidden">
            <BiMenu className="text-3xl" />
          </button>
        </nav>
        <ThemeToggle/>
      </div>
    </header>
  );
}
