import { ProductVariation } from "../types";
import { sortSizes } from "./sortSizes";

export type VariationEntity = {
  id: number;
  name: string;
  slug: string;
  disabled: boolean;
};

const isVariationAvailable = (variation: ProductVariation) => {
  return variation.stock_status === "instock";
};

export const getProductVariationOptions = (
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
    const isAvailable = isVariationAvailable(variation);

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
    sizes: sortSizes(Array.from(sizesMap.values()), (value) => value.name),
  };
};

export const createColorToSizeMap = (
  variations: ProductVariation[] | undefined
) => {
  if (!variations) return new Map<string, string[]>();

  const colorToSizeMap = new Map<string, Set<string>>();

  variations.forEach((variation) => {
    const isAvailable = isVariationAvailable(variation);

    let color: string | undefined = undefined;
    let size: string | undefined = undefined;

    variation.attributes.forEach((attr) => {
      const { slug, option } = attr;

      if (slug === "pa_color") {
        color = option;
      }

      if (slug === "pa_size") {
        size = option;
      }
    });

    // Если цвет и размер определены, добавляем их в мапу
    if (color && size && isAvailable) {
      if (!colorToSizeMap.has(color)) {
        colorToSizeMap.set(color, new Set());
      }
      colorToSizeMap.get(color)?.add(size);
    }
  });

  // Преобразуем Set в массив для удобства
  const finalMap = new Map<string, string[]>();
  colorToSizeMap.forEach((sizes, color) => {
    finalMap.set(color, Array.from(sizes));
  });

  return finalMap;
};
