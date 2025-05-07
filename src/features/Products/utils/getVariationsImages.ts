import { Image } from "@/shared/types/api";
import { ProductVariation } from "../types";

export const getVariationsImages = (
  variations: ProductVariation[] | undefined
) => {
  const imagesMap = new Map<number, Image[]>();

  if (!variations) return imagesMap;

  variations.forEach((item) => {
    if (item.image)
      imagesMap.set(item.id, [
        item.image,
        ...item.woo_variation_gallery_images,
      ]);
  });

  return imagesMap;
};
