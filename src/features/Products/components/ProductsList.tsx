import { useQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "../api/productsApi";
import { useEffect } from "react";
import { useCatalogStore } from "../store/catalogStore";
import ProductServerCard from "./ProductCards/ProductServerCard";
import { cn } from "@/lib/utils";
import { usePaginationStore } from "../store/paginationStore";
import ProductCardLoader from "./ProductCards/ProductCardLoader";

const ProductsList = ({ category }: { category?: string }) => {
  const { sort, gridType } = useCatalogStore();
  const { page, per_page } = usePaginationStore();

  const { data, isPending, isPlaceholderData } = useQuery({
    ...getProductsQueryOptions({
      page,
      per_page,
      category,
      order: sort.type,
      orderby: sort.field,
    }),
    placeholderData: (previousData) => previousData,
  });
  const { setTotalItems, setTotalPages } = useCatalogStore();

  useEffect(() => {
    if (data) {
      setTotalItems(+data.totalItems);
      setTotalPages(+data.totalPages);
    }
  }, [data]);

  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-10 grid-flow-row",
        gridType === "small"
          ? "grid-cols-4 auto-rows-[552px]"
          : "grid-cols-2 auto-rows-[928px]",
        isPlaceholderData && "opacity-60 pointer-events-none"
      )}
    >
      {isPending && !isPlaceholderData && (
        <>
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
          <ProductCardLoader />
        </>
      )}

      {data?.items.map((product) => (
        <ProductServerCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
