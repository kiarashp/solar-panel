import Topbar from "./Topbar";
import LogoHeader from "./LogoHeader";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
export default function SimpleHeader() {
  return (
    <header className=" bg-white dark:bg-primary-950 shadow-sm border-b ">
      <Topbar />

      <div className="container mx-auto xpad">
        <div className="flex items-center justify-between py-4">
          <LogoHeader />
          <DesktopMenu />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
