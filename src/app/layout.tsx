import "../styles/components.css";
import "../styles/globals.css";
import "../lib/fonts";

import { akira, lato } from "../lib/fonts";

import Providers from "../providers/providers";
import { MainLayout } from "@/components/Layout/MainLayout/MainLayout";

export const metadata = {
  title: "2HAPPY",
  description: "2HAPPY",
  keywords: "2happy, 2хэппи, магазин одежды алматы, магазин одежды",
  icons: {
    icon: "/logo_black.svg",
  },
};

const RootLayout = ({
  children,
  breadcrumbs,
}: Readonly<{
  children: React.ReactNode;
  breadcrumbs: React.ReactNode;
}>) => {
  return (
    <html className="h-full" lang="ru">
      <body
        className={`${lato.variable} ${akira.variable} font-sans flex flex-col h-full bg-white`}
      >
        <Providers>
          <MainLayout>
            {breadcrumbs}
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
