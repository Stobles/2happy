import { useEffect } from "react";
import { useCatalogStore } from "../store/catalogStore";
import { getProductsQueryOptions } from "../api/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useFiltersStore } from "../store/filtersStore";
import { usePaginationStore } from "../store/paginationStore";

export const useProductsList = ({
  category,
  tag,
}: {
  category?: number;
  tag?: number;
}) => {
  const { sort, gridType, setTotalItems, setTotalPages } = useCatalogStore();
  const { page, per_page } = usePaginationStore();
  const { priceRange, colors, sizes } = useFiltersStore();

  const { data, isPending, isPlaceholderData } = useQuery({
    ...getProductsQueryOptions({
      page,
      per_page,
      category,
      tag,
      color: colors.map((item) => item.id),
      size: sizes.map((item) => item.id),
      min_price: priceRange?.min,
      max_price: priceRange?.max,
      order: sort.type,
      orderby: sort.field,
    }),
    placeholderData: (previousData) => previousData,
  });

  useEffect(() => {
    if (data) {
      setTotalItems(+data.totalItems);
      setTotalPages(+data.totalPages);
    }

    return () => {
      setTotalItems(0);
      setTotalPages(1);
    };
  }, [data]);

  return { data, gridType, isPending, isPlaceholderData };
};
