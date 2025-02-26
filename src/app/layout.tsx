import "./globals.css";
import "../styles/fonts.css";
import MUIThemeProvider from "@/providers/MUIThemeProvider";
import ToastProvider from "@/components/UI/ToastProvider/ToastProvider";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

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
      <body className="font-sans">
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
