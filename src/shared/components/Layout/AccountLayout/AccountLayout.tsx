import { ReactNode } from "react";
import HelpSection from "./components/HelpSection";

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <HelpSection />
    </>
  );
};

export default AccountLayout;
