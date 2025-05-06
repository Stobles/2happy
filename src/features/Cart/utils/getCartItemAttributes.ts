import { CartItemResponse } from "../types";

export const getCartItemAttributes = (cartItem: CartItemResponse) => {
  return {
    color:
      cartItem.variation.find((item) => item.attribute === "Цвет")?.value ?? "",
    size:
      cartItem.variation.find((item) => item.attribute === "Размер")?.value ??
      "",
  };
};
