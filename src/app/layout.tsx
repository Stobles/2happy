import "../styles/components.css";
import "../styles/globals.css";
import "../lib/fonts";

import { Suspense } from "react";
import { akira, lato } from "../lib/fonts";

import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import Providers from "./providers";

export const metadata = {
  title: "2HAPPY",
  description: "2HAPPY",
  keywords: "2happy, 2хэппи, магазин одежды алматы, магазин одежды",
  icons: {
    icon: "/logo_black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="ru">
      <body
        className={`${lato.variable} ${akira.variable} font-sans flex flex-col h-full bg-white`}
      >
        <Suspense fallback={"...loading"}>
          <Providers>
            <Header />
            <main className="flex-1 mt-[var(--header-height)]">{children}</main>
            <Footer />
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
