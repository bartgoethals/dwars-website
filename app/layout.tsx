import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobileHeader from "@/components/MobileHeader";
import { ThemeProvider } from "@/lib/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-brother-alternative",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dwars",
  description: "Studententijdschrift UAntwerpen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased font-sans transition-colors duration-300 bg-black text-white md:bg-white dark:md:bg-[#222] md:text-black dark:md:text-gray-100 flex flex-col md:flex-row min-h-screen w-full`}
      >
        <ThemeProvider>
          <MobileHeader />
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0 relative">
            <div className="w-full max-w-[1300px] mx-auto min-h-screen flex flex-col transition-colors duration-300">
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
