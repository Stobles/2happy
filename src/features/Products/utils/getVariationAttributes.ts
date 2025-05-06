import { ProductVariation } from "../types";

export const getVariationsAttributes = (variation: ProductVariation) => {
  return {
    color:
      variation.attributes.find((item) => item.slug === "pa_color")?.option ??
      "",
    size:
      variation.attributes.find((item) => item.slug === "pa_size")?.option ??
      "",
  };
};
