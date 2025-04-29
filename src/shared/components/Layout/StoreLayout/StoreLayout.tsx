import { ReactNode } from "react";
import Features from "./components/Features/Features";
import Instagram from "./components/Instagram/Instagram";

const StoreLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Features />
      <Instagram />
    </>
  );
};

export default StoreLayout;
