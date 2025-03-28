import { apiInstance } from "@/api/apiInstance";
import { Category } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { env } from "@/config/env";
import { WooResponse } from "@/types/api";
import { createURLWithParams } from "@/lib/utils";

export type getCategoriesListParameters = {
  parent?: number;
};

export const getCategoriesListURL = `${env.WOOCOMMERCE_API}/products/categories?parent={parent}`;

export const getCategoriesList = async (
  params?: getCategoriesListParameters
): Promise<WooResponse<Category[]>> => {
  const getCategoriesListURLWithParams = createURLWithParams(
    getCategoriesListURL,
    params
  );

  console.log(getCategoriesListURLWithParams);
  const response = await apiInstance.get<unknown, WooResponse<Category[]>>(
    getCategoriesListURLWithParams
  );

  return response;
};

const categoriesQueryKey = (params?: getCategoriesListParameters) => [
  "categories",
  params?.parent,
];

export const getCategoriesQueryOptions = (
  params?: getCategoriesListParameters
) => {
  return queryOptions({
    queryKey: categoriesQueryKey(params),
    queryFn: () => getCategoriesList(params),
  });
};

export const useCategories = (params?: getCategoriesListParameters) =>
  useQuery({
    ...getCategoriesQueryOptions(params),
    retry: false,
  });
