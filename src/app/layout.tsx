import type { Metadata } from "next";
import "./globals.css";
import "../styles/fonts.css";
import MUIThemeProvider from "@/providers/MUIThemeProvider";
import ToastProvider from "@/ui/ToastProvider/ToastProvider";
import { getProducts } from "@/api/authApi";
import DocumentsClient from "@/app/_components/DocumentsClient";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Head from "next/head";

// export const metadata: Metadata = {
//   title: "Zandocs",
//   description:
//     "Zandocs — Конструктор документов. Зандокс. Конструктор документов. Создать документ онлайн. зандокс. zandocs",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const documents = await getProducts(); // тут лучше запрашивать товары
  return (
    <html lang="ru">
      {/* <Head>
        <title>Zandocs</title>
        <meta
          name="description"
          content="Zandocs — Конструктор документов. Зандокс. Конструктор документов. Создать документ онлайн. зандокс. zandocs"
        />
        Метатег keywords уже не оказывает существенного влияния на SEO, но его можно добавить
        <meta
          name="keywords"
          content="Конструктор документов, зандокс, zandocs"
        />
      </Head> */}
      <body>
        <MUIThemeProvider>
          <Suspense fallback={<CircularProgress color={"info"} />}>
            <ToastProvider>
              {/* <Header /> */}
              {/* <DocumentsClient initialDocs={documents} /> */}
              {children}
              {/* <Footer /> */}
            </ToastProvider>
          </Suspense>
        </MUIThemeProvider>
      </body>
    </html>
  );
}
