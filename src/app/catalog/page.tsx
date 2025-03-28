import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { getQueryClient } from "@/api/queryClient";

import Container from "@/components/UI/Container";
import SectionImage from "@/components/UI/SectionImage";
import Catalog from "./components/Catalog";
import CatalogCategories from "./components/CatalogCategories";
import CatalogHeader from "./components/CatalogHeader";

const CatalogPage = async () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(getCategoriesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Container className="my-section flex flex-col gap-12">
        <SectionImage />
        <div className="w-full flex flex-col gap-16">
          <CatalogHeader name="Каталог" />
          <Suspense fallback={<CategorySliderLoader itemsCount={5} />}>
            <CatalogCategories />
          </Suspense>
        </div>
        <Catalog />
      </Container>
    </HydrationBoundary>
  );
};

export default CatalogPage;
