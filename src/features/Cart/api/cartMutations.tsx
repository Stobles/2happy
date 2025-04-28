import {
  useMutation,
  useQuery,
  useQueryClient,
  queryOptions,
} from "@tanstack/react-query";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { createURLWithParams } from "@/shared/lib/utils";
import { env } from "@/config/env";
import { CartResponse } from "../types";
import { AxiosResponse } from "axios";

import Cookies from "js-cookie";

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

  return formattedApiInstance.post<unknown, AxiosResponse<CartResponse>>(
    addToCartURLWithParams,
    null,
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
    onSuccess: (data) => {
      const oldNonce = Cookies.get("nonce");
      const newNonce = data.headers["nonce"];

      if (newNonce != oldNonce) Cookies.set("nonce", newNonce);
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      onSuccess?.();
    },
    onError,
  });
};
