import Link from "next/link";
import { BiSun } from "react-icons/bi";

const LogoHeader = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <BiSun className="text-yellow-500 text-4xl" />
      <span className="text-2xl font-bold text-gray-600 dark:text-gray-200">
        SolarPro
      </span>
    </Link>
  );
};

export default LogoHeader;
