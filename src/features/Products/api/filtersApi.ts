import { apiInstance } from "@/api/apiInstance";
import { env } from "@/config/env";
import { Attribute, WooResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";

export const getAttributesByIdURL = `${env.WOOCOMMERCE_API}/products/attributes/{id}/terms`;

export const getAttributesById = async (
  id: string,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<Attribute[]>> => {
  const response = await apiInstance.get<unknown, WooResponse<Attribute[]>>(
    getAttributesByIdURL.replace("{id}", id),
    {
      signal,
    }
  );

  return response;
};

export const useProductsColors = () => {
  return useQuery({
    queryKey: ["colors"],
    queryFn: (meta) => getAttributesById("1", { signal: meta.signal }),
  });
};

export const useProductsSizes = () => {
  return useQuery({
    queryKey: ["sizes"],
    queryFn: (meta) => getAttributesById("2", { signal: meta.signal }),
  });
};
