import { ProductVariation } from "../types";

export type VariationEntity = {
  id: number;
  name: string;
  slug: string;
  disabled: boolean;
};

export const getProductVariations = (
  variations: ProductVariation[] | undefined
) => {
  if (!variations)
    return {
      colors: [],
      sizes: [],
    };
  const colorsMap = new Map<string, VariationEntity>();
  const sizesMap = new Map<string, VariationEntity>();

  variations.forEach((variation) => {
    const isAvailable = variation.stock_status === "instock";

    variation.attributes.forEach((attr) => {
      const { id, slug, option } = attr;

      const key = slug + "-" + option.toLowerCase();

      const attributeData = {
        id,
        name: option,
        slug,
        disabled: !isAvailable,
      };

      if (slug === "pa_color") {
        const color = colorsMap.get(key);
        if (color) {
          color.disabled = !isAvailable;
        } else {
          colorsMap.set(key, attributeData);
        }
      }

      if (slug === "pa_size") {
        const size = sizesMap.get(key);
        if (size) {
          size.disabled = !isAvailable;
        } else {
          sizesMap.set(key, attributeData);
        }
      }
    });
  });

  return {
    colors: Array.from(colorsMap.values()),
    sizes: Array.from(sizesMap.values()),
  };
};
