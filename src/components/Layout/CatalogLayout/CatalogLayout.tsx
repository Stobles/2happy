import { ReactNode } from "react";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Features from "./components/Features/Features";
import Notifications from "./components/Notifications/Notifications";

const CatalogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Breadcrumbs>
      {children}
      <Features />
      <Notifications />
    </Breadcrumbs>
  );
};

export default CatalogLayout;
