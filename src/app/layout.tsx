import "../styles/components.css";
import "../styles/globals.css";
import "../styles/fonts.css";

import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import ToastProvider from "@/providers/ToastProvider";

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
      <body className="font-sans flex flex-col h-full bg-white">
        <Suspense fallback={<CircularProgress color={"info"} />}>
          <ToastProvider>
            <Header />
            <main className="flex-1 mt-[var(--header-height)]">{children}</main>
            <Footer />
          </ToastProvider>
        </Suspense>
      </body>
    </html>
  );
}
