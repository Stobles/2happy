import CatalogLayout from "@/shared/components/Layout/CatalogLayout/CatalogLayout";

export const metadata = {
  title: "2HAPPY",
  description: "2HAPPY",
  keywords: "2happy, 2хэппи, магазин одежды алматы, магазин одежды",
  icons: {
    icon: "/logo_black.svg",
  },
};

const CatalogPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <CatalogLayout>{children}</CatalogLayout>;
};

export default CatalogPageLayout;
