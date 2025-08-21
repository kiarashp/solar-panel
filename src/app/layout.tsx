"use client";

import "./globals.css";
import SimpleHeader from "@/components/SimpleHeader";
import SimpleFooter from "@/components/SimpleFooter";

import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col mx-auto max-w-7xl text-purple-300 dark:text-green-800">
            <SimpleHeader />
            {children}
            <SimpleFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
