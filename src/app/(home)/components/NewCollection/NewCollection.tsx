import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import NewCollectionSlider from "./components/NewCollectionSlider.tsx/NewCollectionSlider";
import SectionImage from "@/components/UI/SectionImage";
import { Suspense } from "react";
import { getQueryClient } from "@/api/queryClient";
import { categorySlugs } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import NewCollectionLoader from "./components/NewCollectionSlider.tsx/NewCollectionLoader";

const NewCollection = async () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    getProductsQueryOptions({ category: categorySlugs["new"], per_page: 9 })
  );
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Section>
        <Container className="flex-col gap-16 my-section">
          <SectionImage />
          <h2 className="text-h2">Новая коллекция / 25</h2>
          <Suspense fallback={<NewCollectionLoader />}>
            <NewCollectionSlider />
          </Suspense>
        </Container>
      </Section>
    </HydrationBoundary>
  );
};

export default NewCollection;
