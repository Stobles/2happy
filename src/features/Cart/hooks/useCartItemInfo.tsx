import { CartItemResponse } from "../types";
import { getPriceWithMinors } from "../utils/getPriceWithMinors";

export const useCartItemInfo = (cartItem: CartItemResponse) => {
  const size =
    cartItem.variation.find((item) => item.attribute === "Размер")?.value ?? "";
  const color =
    cartItem.variation.find((item) => item.attribute === "Цвет")?.value ?? "";

  const regularPrice = Number(cartItem.prices.regular_price);
  const salePrice = Number(cartItem.prices.sale_price);
  const isOnSale = regularPrice != salePrice;
  const salePercent = isOnSale ? (salePrice / regularPrice) * 100 : 0;

  const quantity = cartItem.quantity;

  const sumPrice = isOnSale
    ? new Intl.NumberFormat("ru-RU").format(
        getPriceWithMinors(
          salePrice * quantity,
          cartItem.prices.currency_minor_unit
        )
      )
    : new Intl.NumberFormat("ru-RU").format(
        getPriceWithMinors(
          regularPrice * quantity,
          cartItem.prices.currency_minor_unit
        )
      );

  return {
    key: cartItem.key,
    parentId: cartItem.parent_id,
    image: cartItem.images[0],
    name: cartItem.name,
    size,
    color,
    quantity,
    sku: cartItem.sku,
    regularPrice: new Intl.NumberFormat("ru-RU").format(
      getPriceWithMinors(regularPrice, cartItem.prices.currency_minor_unit)
    ),
    salePrice: new Intl.NumberFormat("ru-RU").format(
      getPriceWithMinors(salePrice, cartItem.prices.currency_minor_unit)
    ),
    sumPrice,
    salePercent,
    isOnSale,
    variation: {
      size: cartItem.variation.find((item) => item.attribute === "Размер")
        ?.value,
      color: cartItem.variation.find((item) => item.attribute === "Цвет")
        ?.value,
    },
    currencySymbol: cartItem.prices.currency_symbol,
  };
};
