import { ReactNode } from "react";
import Features from "./components/Features/Features";
import Notifications from "./components/Notifications/Notifications";

const StoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Features />
      <Notifications />
    </>
  );
};

export default StoreLayout;
