import "../styles/components.css";
import "../styles/globals.css";
import "../styles/fonts.css";

import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";
import ToastProvider from "@/providers/ToastProvider";
import Head from "next/head";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const documents = await getProducts(); // тут лучше запрашивать товары
  return (
    <html className="h-full" lang="ru">
      <Head>
        <title>2HAPPY</title>
        <meta name="description" content="2HAPPY" />
        <meta
          name="keywords"
          content="2happy, 2хэппи, магазин одежды алматы, магазин одежды"
        />
      </Head>
      <body className="font-sans flex flex-col h-full bg-white">
        <Suspense fallback={<CircularProgress color={"info"} />}>
          <ToastProvider>
            <Header />
            {/* Это подложка под header, чтобы была тень и border, но скрывались под CategorySheet */}
            <div className="absolute h-[var(--header-height)] left-0 top-0 w-full z-[49] shadow-header border-b-[1px] border-main"></div>
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </Suspense>
      </body>
    </html>
  );
}
