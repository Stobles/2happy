import { ProductVariation } from "../types";

export const getVariationPriceByAttributes = (
  variations: ProductVariation[] | undefined,
  size: string,
  color: string
) => {
  if (!variations) return null;
  const match = variations.find((variation) => {
    const attrs = variation.attributes;

    const hasSize = attrs.some(
      (attr) => attr.slug === "pa_size" && attr.option === size
    );
    const hasColor = attrs.some(
      (attr) => attr.slug === "pa_color" && attr.option === color
    );

    return hasSize && hasColor;
  });

  if (!match) return null;

  return {
    regular_price: match.regular_price,
    sale_price: match.sale_price,
    on_sale: match.on_sale,
    variation_id: match.id,
  };
};
