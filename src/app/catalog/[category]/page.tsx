import { Suspense } from "react";
import { getQueryClient } from "@/api/queryClient";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";

import Container from "@/components/UI/Container";
import Catalog from "../components/Catalog";
import SectionImage from "@/components/UI/SectionImage";
import CatalogHeader from "../components/CatalogHeader";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import CatalogCategories from "../components/CatalogCategories";
import FiltersList from "@/features/Products/components/Filters/FiltersList";

const CatalogPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ subTo: string | undefined }>;
}) => {
  const queryClient = getQueryClient();

  const { category } = await params;
  const { subTo } = await searchParams;
  const [slug, id] = category.split("_");

  const idToFetch = subTo ? subTo : id;

  queryClient.prefetchQuery(getCategoriesQueryOptions({ parent: +idToFetch }));

  return (
    <Container className="my-section flex flex-col gap-12">
      <SectionImage />
      <div className="w-full flex flex-col gap-16">
        <CatalogHeader />
        <Suspense fallback={<CategorySliderLoader itemsCount={5} />}>
          <CatalogCategories parent={+idToFetch} activeSlug={slug} />
        </Suspense>
      </div>
      <Catalog key="биба" category={+id} filtersListSlot={<FiltersList />} />
    </Container>
  );
};

export default CatalogPage;
