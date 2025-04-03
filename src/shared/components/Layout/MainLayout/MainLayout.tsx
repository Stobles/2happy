import { ReactNode, Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categoryIds } from "@/features/Categories/consts/consts";
import { getQueryClient } from "@/shared/api/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["clothes"],
    })
  );

  queryClient.prefetchQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["accessories"],
    })
  );

  queryClient.prefetchQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["outerwear"],
    })
  );
  return (
    <Suspense fallback={"...Loading"}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Header />
        <main className="flex-1 mt-[var(--header-height)]">{children}</main>
        <Footer />
      </HydrationBoundary>
    </Suspense>
  );
};
