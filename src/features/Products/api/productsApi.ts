import { apiInstance } from "@/api/apiInstance";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { env } from "@/config/env";
import { getURLWithParams } from "@/lib/utils";
import { ProductServer } from "../types";
import { WooResponse } from "@/types/api";

export type getProductsListParameters = {
  page: number;
  per_page: number;
  offset?: number;
  order?: "asc" | "desc";
  orderby?: string;
};

export const getProductsListURL = `${env.WOOCOMMERCE_API}/products?page={page}&per_page={per_page}`;

export const getProductsList = async (
  params: getProductsListParameters,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<ProductServer[]>> => {
  const getProductsListURLWithParams = getURLWithParams(
    getProductsListURL,
    params
  );

  console.log(getProductsListURLWithParams);
  const response = await apiInstance.get<unknown, WooResponse<ProductServer[]>>(
    getProductsListURLWithParams,
    {
      signal,
    }
  );

  return response;
};

const productsQueryKey = (page: number) => ["products", page];

export const getProductsQueryOptions = (
  params: getProductsListParameters = { page: 1, per_page: 1 }
) => {
  return queryOptions({
    queryKey: productsQueryKey(params.page),
    queryFn: (meta) => getProductsList(params, { signal: meta.signal }),
  });
};

export const useProductsList = (params: getProductsListParameters) =>
  useQuery(getProductsQueryOptions(params));
