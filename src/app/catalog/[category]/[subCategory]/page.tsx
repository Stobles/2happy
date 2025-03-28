import { Suspense } from "react";
import { getQueryClient } from "@/api/queryClient";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";

import Container from "@/components/UI/Container";
import Catalog from "../../components/Catalog";
import SectionImage from "@/components/UI/SectionImage";
import CatalogHeader from "../../components/CatalogHeader";
import CategorySliderLoader from "@/features/Categories/components/CategorySlider/CategorySliderLoader";
import CatalogCategories from "../../components/CatalogCategories";

const CatalogPage = async ({
  params,
}: {
  params: Promise<{ category: string; subCategory: string }>;
}) => {
  const queryClient = getQueryClient();

  const { category } = await params;
  const [slug, id] = category.split("_");

  queryClient.prefetchQuery(getCategoriesQueryOptions({ parent: +id }));

  return (
    <Container className="my-section flex flex-col gap-12">
      <SectionImage />
      <div className="w-full flex flex-col gap-16">
        <CatalogHeader />
        <Suspense fallback={<CategorySliderLoader itemsCount={5} />}>
          <CatalogCategories parent={+id} activeSlug={slug} />
        </Suspense>
      </div>
      <Catalog />
    </Container>
  );
};

export default CatalogPage;
