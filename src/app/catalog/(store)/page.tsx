import { Suspense } from "react";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { getQueryClient } from "@/shared/api/queryClient";

import Catalog from "../components/Catalog";
import CatalogCategories from "../components/CatalogCategories";
import FiltersList from "@/features/Products/components/Filters/FiltersList";

const CatalogPage = () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(getCategoriesQueryOptions({ parent: 0 }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col gap-12">
        <Suspense fallback={<CategorySliderLoader itemsCount={5} />}>
          <CatalogCategories parent={0} />
        </Suspense>
        <Catalog filtersListSlot={<FiltersList />} />
      </div>
    </HydrationBoundary>
  );
};

export default CatalogPage;
