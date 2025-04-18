import { ChipVariant } from "@/shared/components/UI/Chip";
import { ProductServer } from "../types";
import { getProductSale } from "./getProductSale";

export const getProductChip = (
  product: ProductServer
): { type: ChipVariant; text: string } | null => {
  const hasNewTag = product.tags.some((item) => item.slug === "new");
  const hasBestesellerTag = product.tags.some(
    (item) => item.slug === "bestseller"
  );
  const isOutOfStock = product.stock_status === "outofstock";

  switch (true) {
    case isOutOfStock:
      return { type: "black", text: "Нет на складе" };
    case product.on_sale:
      const sale = getProductSale(+product.regular_price, +product.sale_price);
      return { type: "red", text: `Sale ${sale}%` };
    case hasNewTag:
      return { type: "yellow", text: "New" };
    case hasBestesellerTag:
      return { type: "green", text: "Бестселлер" };
    default:
      return null;
  }
};
