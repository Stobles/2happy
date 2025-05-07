"use client";

import { tagIds } from "@/features/Categories/consts/consts";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import ProductServerCard from "@/features/Products/components/Cards/ProductServerCard";
import { useSuspenseQuery } from "@tanstack/react-query";

const FinalSaleList = () => {
  const { data } = useSuspenseQuery(
    getProductsQueryOptions({
      tag: tagIds["final_sale"],
      per_page: 3,
    })
  );
  return (
    <>
      {data.items.map((product) => (
        <ProductServerCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default FinalSaleList;
