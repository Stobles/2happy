import { env } from "@/config/env";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { WooResponse } from "@/shared/types/api";
import { createURLWithParams } from "@/shared/utils";
import { CreateOrderPayload, OrderResponse } from "../types";
import {
  queryOptions,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { getQueryClient } from "@/shared/api/queryClient";

export type getOrdersListParameters = {
  page?: number;
  per_page?: number;
  order?: string;
  orderby?: string;
  customer?: number;
};

const ordersListURL = `${env.WOOCOMMERCE_API}/orders`;

export const getOrdersList = async (
  params: getOrdersListParameters,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<OrderResponse[]>> => {
  const getProductsListURLWithParams = createURLWithParams(
    ordersListURL,
    params
  );

  const response = await formattedApiInstance.get<
    unknown,
    WooResponse<OrderResponse[]>
  >(getProductsListURLWithParams, {
    signal,
  });

  return response;
};

const ordersQueryKey = (params: getOrdersListParameters) => {
  const queryKey = ["orders"];

  Object.entries(params).forEach(([key, value]) => {
    if (value) queryKey.push(`${key} ${value}`);
  });

  return queryKey;
};

export const getOrdersQueryOptions = (params: getOrdersListParameters) => {
  return queryOptions({
    queryKey: ordersQueryKey(params),
    queryFn: (meta) => getOrdersList(params, { signal: meta.signal }),
  });
};

export const createOrder = async ({
  data,
}: {
  data: CreateOrderPayload;
}): Promise<OrderResponse> => {
  return formattedApiInstance.post<unknown, OrderResponse>(ordersListURL, data);
};

export const useCreateOrder = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  OrderResponse,
  unknown,
  { data: CreateOrderPayload },
  unknown
>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: createOrder,
    onSuccess: (res, variables, context) => {
      queryClient.invalidateQueries(getOrdersQueryOptions({}));
      onSuccess?.(res, variables, context);
    },
    onError: (err, variables, context) => {
      onError?.(err, variables, context);
    },
    ...options,
  });
};
