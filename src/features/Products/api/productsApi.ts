import { apiInstance } from "@/api/apiInstance";
import { queryOptions } from "@tanstack/react-query";
import { env } from "@/config/env";
import { createURLWithParams } from "@/lib/utils";
import { ProductServer } from "../types";
import { WooResponse } from "@/types/api";

export type getProductsListParameters = {
  page?: number;
  per_page?: number;
  order?: "asc" | "desc";
  orderby?: string;
};

export const getProductsListURL = `${env.WOOCOMMERCE_API}/products`;

export const getProductsList = async (
  params: getProductsListParameters,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<ProductServer[]>> => {
  const getProductsListURLWithParams = createURLWithParams(
    getProductsListURL,
    params
  );

  const response = await apiInstance.get<unknown, WooResponse<ProductServer[]>>(
    getProductsListURLWithParams,
    {
      signal,
    }
  );

  return response;
};

const productsQueryKey = (params: getProductsListParameters) => [
  "products",
  JSON.stringify(params),
];

export const getProductsQueryOptions = (params: getProductsListParameters) => {
  return queryOptions({
    queryKey: productsQueryKey(params),
    queryFn: (meta) => getProductsList(params, { signal: meta.signal }),
  });
};
