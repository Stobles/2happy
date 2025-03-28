import { useQuery } from "@tanstack/react-query";
import {
  getProductsListParameters,
  getProductsQueryOptions,
} from "../api/productsApi";
import { TProductGrid } from "../types";
import { useEffect } from "react";
import { useProductsStore } from "../store/productsStore";
import ProductServerCard from "./ProductCards/ProductServerCard";
import { cn } from "@/lib/utils";

const ProductsList = ({
  grid = "small",
  params,
}: {
  grid?: TProductGrid;
  params: getProductsListParameters;
}) => {
  const { data, isPlaceholderData } = useQuery({
    ...getProductsQueryOptions(params),
    placeholderData: (previousData) => previousData,
  });
  const { setTotalItems, setTotalPages } = useProductsStore();

  useEffect(() => {
    if (data) {
      setTotalItems(data.totalItems);
      setTotalPages(data.totalPages);
    }
  }, [data]);

  return (
    <div
      className={cn(
        "grid gap-x-6 gap-y-10 grid-flow-row",
        grid === "small"
          ? "grid-cols-4 auto-rows-[552px]"
          : "grid-cols-2 auto-rows-[928px]",
        isPlaceholderData && "opacity-60 pointer-events-none"
      )}
    >
      {data?.items.map((product) => (
        <ProductServerCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
