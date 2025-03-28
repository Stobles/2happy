import { ReactNode, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense fallback={"...Loading"}>
      <Header />
      <main className="flex-1 mt-[var(--header-height)]">{children}</main>
      <Footer />
    </Suspense>
  );
};
