import { env } from "@/config/env";
import { defaultApiInstance } from "@/shared/api/defaultApiInstance";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import {
  queryOptions,
  useQuery,
  useSuspenseQuery,
} from "@tanstack/react-query";

import Cookies from "js-cookie";
import { CartResponse } from "../types";
const getCartURL = `${env.WOOCOMMERCE_STORE_API}/cart`;

export const fetchNonce = async (): Promise<string> => {
  const response = await defaultApiInstance.get(getCartURL);

  const nonce = response.headers["nonce"] || response.headers["Nonce"];

  console.log(response.headers, nonce);

  Cookies.set("nonce", nonce);

  if (!nonce) {
    console.error("No nonce found");
  }

  return nonce;
};

const getCart = (): Promise<CartResponse> => {
  return formattedApiInstance.get<unknown, CartResponse>(getCartURL);
};

export const getCartQueryOptions = () =>
  queryOptions({
    queryKey: ["cart"],
    queryFn: getCart,
  });

export const useCart = () => {
  return useQuery({
    ...getCartQueryOptions(),
  });
};

export const useSuspenseCart = () => {
  return useSuspenseQuery({
    ...getCartQueryOptions(),
  });
};
