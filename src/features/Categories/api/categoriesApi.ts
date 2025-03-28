import { apiInstance } from "@/api/apiInstance";
import { Category } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { env } from "@/config/env";
import { WooResponse } from "@/types/api";

export const getCategoriesListURL = `${env.WOOCOMMERCE_API}/products/categories`;

export const getCategoriesList = async (): Promise<WooResponse<Category[]>> => {
  const response = await apiInstance.get<unknown, WooResponse<Category[]>>(
    getCategoriesListURL
  );

  return response;
};

const categoriesQueryKey = ["categories"];

export const getCategoriesQueryOptions = () => {
  return queryOptions({
    queryKey: categoriesQueryKey,
    queryFn: getCategoriesList,
  });
};

export const useCategories = () =>
  useQuery({
    ...getCategoriesQueryOptions(),
    retry: false,
  });
