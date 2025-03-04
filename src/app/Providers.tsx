import ToastProvider from "@/providers/ToastProvider";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default Providers;
