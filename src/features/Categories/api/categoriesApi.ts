import { apiInstance } from "@/api/apiInstance";
import { Category } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { env } from "@/config/env";
import { WooResponse } from "@/types/api";
import { createURLWithParams } from "@/lib/utils";

export type getCategoriesListParameters = {
  parent?: number;
  per_page?: number;
};

export const getCategoriesListURL = `${env.WOOCOMMERCE_API}/products/categories`;

export const getCategoriesList = async (
  params?: getCategoriesListParameters
): Promise<WooResponse<Category[]>> => {
  if (!params?.per_page) params = { ...params, per_page: 30 };
  const getCategoriesListURLWithParams = createURLWithParams(
    getCategoriesListURL,
    params
  );

  const response = await apiInstance.get<unknown, WooResponse<Category[]>>(
    getCategoriesListURLWithParams
  );

  return response;
};

export const categoriesQueryKey = (params?: getCategoriesListParameters) => [
  "categories",
  `parent ${params?.parent}`,
];

export const getCategoriesQueryOptions = (
  params?: getCategoriesListParameters
) => {
  return queryOptions({
    queryKey: categoriesQueryKey(params),
    queryFn: () => getCategoriesList(params),
    staleTime: Infinity,
  });
};

export const useCategories = (params?: getCategoriesListParameters) =>
  useQuery({
    ...getCategoriesQueryOptions(params),
    retry: false,
  });
