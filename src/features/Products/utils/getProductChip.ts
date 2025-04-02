import { ChipVariant } from "@/components/UI/Chip";
import { Product, ProductServer } from "../types";

export const getProductChip = (
  product: ProductServer
): { type: ChipVariant; text: string } | null => {
  switch (true) {
    case product.on_sale:
      const sale = (+product.sale_price / +product.regular_price) * 100;
      return { type: "red", text: `Sale ${sale}%` };
    default:
      return null;
  }
};
