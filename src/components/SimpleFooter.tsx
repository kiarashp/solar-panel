import { BiSun, BiPhoneCall, BiEnvelope, BiMap } from "react-icons/bi";
import { FaFacebook, FaX, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BiSun className="text-yellow-500 text-4xl" />
              <span className="text-2xl font-bold">SolarPro</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of sustainable solar energy solutions for
              residential and commercial properties.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <FaFacebook />
              <FaX />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Products
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Residential Solar
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Commercial Solar
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Solar Financing
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Maintenance
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Battery Storage
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <BiPhoneCall className="text-yellow-500 text-xl" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiEnvelope className="text-yellow-500 text-xl" />

                <span className="text-gray-300">info@solarpro.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <BiMap className="text-yellow-500 text-xl" />
                <span className="text-gray-300">
                  123 Solar Street, Green City, GC 12345
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SolarPro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
