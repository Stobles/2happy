import { ProductServer } from "../types";
import { getProductChip } from "./getProductChip";
import { getProductAttributes } from "./getProductAttributes";

export const getProductCardInfo = (product: ProductServer) => {
  const { images, attributes } = product;
  const productChip = getProductChip(product);
  const productImage = images?.[0] ?? null;

  const { sizes, colors } = getProductAttributes(attributes);

  return { colors, sizes, image: productImage, chip: productChip };
};
