import { apiInstance } from "@/api/apiInstance";
import { queryOptions } from "@tanstack/react-query";
import { env } from "@/config/env";
import { createURLWithParams } from "@/lib/utils";
import { ProductServer } from "../types";
import { WooResponse } from "@/types/api";

export type getProductsListParameters = {
  page?: number;
  per_page?: number;
  category?: number;
  min_price?: number;
  max_price?: number;
  order?: string;
  orderby?: string;
  color?: number[];
  size?: number[];
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

const productsQueryKey = (params: getProductsListParameters) => {
  const key = ["products"];

  // Object.entries(params).forEach(([key, value]) => {
  //   if()
  // })

  if (params.category) key.push(`category ${params.category}`);
  if (params.page) key.push(`page ${params.page}`);
  if (params.per_page) key.push(`per_page ${params.per_page}`);
  if (params.order) key.push(`order ${params.order}`);
  if (params.orderby) key.push(`orderby ${params.orderby}`);
  if (params.category) key.push(`category ${params.category}`);
  if (params.min_price) key.push(`min ${params.min_price}`);
  if (params.max_price) key.push(`max ${params.max_price}`);
  if (params.color?.length) {
    key.push(`colors ${params.color}`);
  }
  if (params.size?.length) {
    key.push(`sizes ${params.size}`);
  }

  return key;
};

export const getProductsQueryOptions = (params: getProductsListParameters) => {
  return queryOptions({
    queryKey: productsQueryKey(params),
    queryFn: (meta) => getProductsList(params, { signal: meta.signal }),
  });
};
