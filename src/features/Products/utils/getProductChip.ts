import { ChipVariant } from "@/components/UI/Chip";
import { Product } from "../types";

export const getProductChip = (
  product: Product
): { type: ChipVariant; text: string } | null => {
  switch (true) {
    case product.isNew:
      return { type: "yellow", text: `New` };
    case product.sale != undefined:
      return { type: "red", text: `Sale ${product.sale?.amount}%` };
    case product.isBestseller:
      return { type: "green", text: `Бестселлер` };
    default:
      return null;
  }
};
