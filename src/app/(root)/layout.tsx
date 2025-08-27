import "@/app/globals.css";
import SimpleHeader from "@/components/shared/header/SimpleHeader";
import SimpleFooter from "@/components/SimpleFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: `home Description`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className=" flex-1 text-gray-900 dark:text-gray-400">
        <SimpleHeader />
        {children}
        <SimpleFooter />
      </main>
    </div>
  );
}
