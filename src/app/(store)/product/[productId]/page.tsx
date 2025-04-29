import { getQueryClient } from "@/shared/api/queryClient";
import AboutSection from "../components/AboutSection/AboutSection";
import AdditionSection from "../components/AdditionSection";
import ProductSection from "../components/ProductSection/ProductSection";
import RecentSection from "../components/RecentSection";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getProductVariationsQueryOptions } from "@/features/Products/api/productsApi";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const queryClient = getQueryClient();

  const { productId } = await params;
  const [_, id] = productId.split("_");

  queryClient.prefetchQuery(getProductVariationsQueryOptions(Number(id)));

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductSection />
        <AboutSection />
        <AdditionSection />
        <RecentSection />
      </HydrationBoundary>
    </>
  );
};

export default ProductPage;
