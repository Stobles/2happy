import "./globals.css";
import "../styles/fonts.css";
import ToastProvider from "@/components/UI/ToastProvider/ToastProvider";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

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
    <html className="h-full" lang="ru">
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
      <body className="font-sans flex flex-col h-full">
        <Suspense fallback={<CircularProgress color={"info"} />}>
          <ToastProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </ToastProvider>
        </Suspense>
      </body>
    </html>
  );
}
