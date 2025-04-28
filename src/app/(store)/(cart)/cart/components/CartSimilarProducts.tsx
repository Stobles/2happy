"use client";

import { getRelatedProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductsScrollableSection from "@/features/Products/components/ProductsScrollableSection";
import { useQuery } from "@tanstack/react-query";

const CartSimilarProducts = () => {
  const { data, isPending } = useQuery(
    getRelatedProductsQueryOptions({ product_ids: [178], per_page: 20 })
  );
  return (
    <ProductsScrollableSection
      title="Похожие товары /"
      data={data}
      isLoading={isPending}
    />
  );
};

export default CartSimilarProducts;
