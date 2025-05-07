"use client";

import { useEffect } from "react";
import { getProductByIdQueryOptions } from "../api/productsApi";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ProductServer } from "../types";

export const useGetProductByIdSuspense = (
  id: number,
  onSuccess?: (data: ProductServer) => void
) => {
  const { data, isSuccess, ...otherProps } = useSuspenseQuery({
    ...getProductByIdQueryOptions(id),
  });

  useEffect(() => {
    if (isSuccess && onSuccess) onSuccess(data);
  }, [isSuccess]);

  return { data, ...otherProps };
};
