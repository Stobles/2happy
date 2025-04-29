import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createURLWithParams } from "@/shared/utils/createURLWithParams";
import { env } from "@/config/env";
import { CartResponse } from "../types";
import { AxiosResponse } from "axios";

import Cookies from "js-cookie";
import { getCartQueryOptions } from "./cartQueries";
import { defaultApiInstance } from "@/shared/api/defaultApiInstance";

export type AddToCartParams = {
  id?: number;
  quantity?: number;
};

const addToCartURL = `${env.WOOCOMMERCE_STORE_API}/cart/add-item`;

export type AddToCartResponse = {
  key: string;
  id: number;
  quantity: number;
  name: string;
};

const addToCart = ({
  params,
  nonce,
}: {
  params: AddToCartParams;
  nonce: string | undefined;
}): Promise<AxiosResponse<CartResponse>> => {
  const addToCartURLWithParams = createURLWithParams(addToCartURL, params);

  return defaultApiInstance.post<unknown, AxiosResponse<CartResponse>>(
    addToCartURL,
    {
      id: params.id,
      quantity: params.quantity,
      item_data: [{ key: "parent_id", value: 178 }],
    },
    {
      headers: {
        Nonce: nonce,
      },
    }
  );
};

export const useAddToCart = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: (res) => {
      const oldNonce = Cookies.get("nonce");
      const newNonce = res.headers["nonce"];

      if (newNonce != oldNonce) Cookies.set("nonce", newNonce);
      queryClient.setQueryData(getCartQueryOptions().queryKey, res.data);
      onSuccess?.();
    },
    onError,
  });
};
