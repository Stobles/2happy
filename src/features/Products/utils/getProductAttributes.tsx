import { ProductAttribute } from "../types";

export const getProductAttributes = (attributes: ProductAttribute[]) => {
  const colors =
    attributes?.find((attr) => attr.slug === "pa_color")?.options ?? [];
  const sizes =
    attributes?.find((attr) => attr.slug === "pa_size")?.options ?? [];

  return { colors, sizes };
};
