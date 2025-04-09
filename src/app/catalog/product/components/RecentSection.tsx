"use client";

import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { useLocalStorage } from "@/shared/hooks/useLocalStorage";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";

const RecentSection = ({ productId }: { productId: number }) => {
  const [recentProducts, _] = useLocalStorage<number[]>("recentProducts", []);

  const filteredRecentProducts = recentProducts.filter((id) => id != productId);

  const { data, isFetching } = useQuery({
    ...getProductsQueryOptions({ include: filteredRecentProducts }),
    enabled: !!filteredRecentProducts.length,
  });
  return (
    <ProductsScrollableSection
      title="Недавно просмотренные /"
      data={data?.items}
      isLoading={isFetching}
    />
  );
};

export default RecentSection;
