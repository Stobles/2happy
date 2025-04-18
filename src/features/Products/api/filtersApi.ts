import { apiInstance } from "@/shared/api/apiInstance";
import { env } from "@/config/env";
import { Attribute, WooResponse } from "@/shared/types/api";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const attributesMap = {
  colors: 1,
  sizes: 2,
};

const getAttributesByIdURL = `${env.WOOCOMMERCE_API}/products/attributes/{id}/terms`;

const getAttributesById = async (
  id: number,
  { signal }: { signal: AbortSignal }
): Promise<WooResponse<Attribute[]>> => {
  const response = await apiInstance.get<unknown, WooResponse<Attribute[]>>(
    getAttributesByIdURL.replace("{id}", `${id}`),
    {
      signal,
    }
  );

  return response;
};

export const getProductAttributesQueryOptions = (id: number) => {
  return queryOptions({
    queryKey: ["attributes", id],
    queryFn: (meta) => getAttributesById(id, { signal: meta.signal }),
  });
};

export const useProductsColors = () =>
  useQuery(getProductAttributesQueryOptions(attributesMap["colors"]));

export const useProductsSizes = () =>
  useQuery(getProductAttributesQueryOptions(attributesMap["sizes"]));
