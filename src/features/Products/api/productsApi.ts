import { apiInstance } from "@/shared/api/apiInstance";
import { queryOptions } from "@tanstack/react-query";
import { env } from "@/config/env";
import { createURLWithParams } from "@/shared/lib/utils";
import { ProductServer } from "../types";
import { WooResponse } from "@/shared/types/api";

export type getProductsListParameters = {
  page?: number;
  per_page?: number;
  category?: number;
  tag?: number;
  min_price?: number;
  max_price?: number;
  order?: string;
  orderby?: string;
  color?: number[];
  size?: number[];
  include?: number[];
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
  const queryKey = ["products"];

  Object.entries(params).forEach(([key, value]) => {
    if (value instanceof Array) {
      if (value.length) queryKey.push(`${key} ${value}`);
    } else {
      if (value) queryKey.push(`${key} ${value}`);
    }
  });

  return queryKey;
};

export const getProductsQueryOptions = (params: getProductsListParameters) => {
  return queryOptions({
    queryKey: productsQueryKey(params),
    queryFn: (meta) => getProductsList(params, { signal: meta.signal }),
  });
};

export const getProductByIdURL = `${env.WOOCOMMERCE_API}/products/{id}`;

export const getProductById = async (
  id: number,
  {
    signal,
  }: {
    signal: AbortSignal;
  }
): Promise<ProductServer> => {
  const response = await apiInstance.get<unknown, ProductServer>(
    getProductByIdURL.replace("{id}", `${id}`),
    {
      signal,
    }
  );

  return response;
};

const productByIdQueryKey = (id: number) => ["product", id];

export const getProductByIdQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: productByIdQueryKey(id),
    queryFn: (meta) => getProductById(id, { signal: meta.signal }),
    enabled: !!id,
  });
};
