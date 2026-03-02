import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        className={`${inter.variable} ${montserrat.variable} antialiased bg-dwars-bg font-sans`}
      >
        <div className="flex min-h-screen w-full relative">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0">
            <div className="w-full max-w-[1300px] mx-auto bg-white shadow-2xl min-h-screen relative flex flex-col">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
