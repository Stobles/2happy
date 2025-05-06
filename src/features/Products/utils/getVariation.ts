import { ProductVariation } from "../types";

export const getVariation = (
  variations: ProductVariation[],
  color: string,
  size: string
) => {
  return (
    variations.find(
      (item) =>
        item.attributes[0].option === color &&
        item.attributes[1].option === size
    ) ?? null
  );
};
