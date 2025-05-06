import { useQuery } from "@tanstack/react-query";
import { getProductVariationsQueryOptions } from "../api/productsApi";
import { ProductVariation } from "../types";
import { useEffect } from "react";

export const useGetProductVariations = (
  id: number,
  onSuccess?: (data: ProductVariation[]) => void
) => {
  const { data, isSuccess, ...otherProps } = useQuery(
    getProductVariationsQueryOptions(id)
  );

  useEffect(() => {
    if (isSuccess && onSuccess) onSuccess(data.items);
  }, [isSuccess]);

  return { data, ...otherProps };
};
