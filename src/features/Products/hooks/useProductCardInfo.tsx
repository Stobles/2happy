import { ProductServer } from "../types";
import { getProductChip } from "../utils/getProductChip";

export const useProductCardInfo = (product: ProductServer) => {
  const { images, attributes } = product;

  const productChip = getProductChip(product);

  const productImage = images?.[0] ?? null;

  const colors =
    attributes?.find((attr) => attr.slug === "pa_color")?.options ?? [];
  const sizes =
    attributes?.find((attr) => attr.slug === "pa_size")?.options ?? [];

  return { colors, sizes, image: productImage, chip: productChip };
};
