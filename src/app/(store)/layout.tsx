import StoreLayout from "@/shared/components/Layout/StoreLayout/StoreLayout";

export const metadata = {
  title: "2HAPPY",
  description: "2HAPPY",
  keywords: "2happy, 2хэппи, магазин одежды алматы, магазин одежды",
  icons: {
    icon: "/logo_black.svg",
  },
};

const StoreRouteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <StoreLayout>{children}</StoreLayout>;
};

export default StoreRouteLayout;
