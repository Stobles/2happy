import { ProductServer, ProductVariation } from "../types";

export const getAttributesByProductPrice = (
  product: ProductServer,
  variations: ProductVariation[] | undefined
) => {
  if (!variations) return { size: "", color: "" };
  const productRegular = product.regular_price;
  const productSale = product.sale_price;

  for (const variation of variations) {
    if (
      variation.regular_price === productRegular &&
      variation.sale_price === productSale
    ) {
      const size =
        variation.attributes.find((attr) => attr.slug === "pa_size")?.option ||
        "";
      const color =
        variation.attributes.find((attr) => attr.slug === "pa_color")?.option ||
        "";

      return { size, color };
    }
  }

  return { size: "", color: "" };
};
