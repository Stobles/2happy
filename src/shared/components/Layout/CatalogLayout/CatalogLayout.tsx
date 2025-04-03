import { ReactNode } from "react";
import Features from "./components/Features/Features";
import Notifications from "./components/Notifications/Notifications";

const CatalogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Features />
      <Notifications />
    </>
  );
};

export default CatalogLayout;
