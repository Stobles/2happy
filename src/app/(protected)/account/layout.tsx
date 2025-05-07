import AccountLayout from "@/shared/components/Layout/AccountLayout/AccountLayout";

const AccountPageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AccountLayout>{children}</AccountLayout>;
};

export default AccountPageLayout;
