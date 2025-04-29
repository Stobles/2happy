import { CartResponse } from "../types";
import { getPriceWithMinors } from "../utils/getPriceWithMinors";

export const useCartInfo = (cartData: CartResponse) => {
  const totalPriceWithoutSale = cartData.items.reduce((total, item) => {
    const quantity = item.quantity || 1;
    const regularPrice = parseFloat(item.prices.regular_price) || 0;

    const currencyMinor = item.prices.currency_minor_unit;
    const totalItemPrice = getPriceWithMinors(
      regularPrice * quantity,
      currencyMinor
    );

    return total + totalItemPrice;
  }, 0);

  const currencySymbol = cartData.totals.currency_symbol;

  const totalDiscount = cartData.items.reduce((sum, item) => {
    const reg = parseFloat(item.prices.regular_price);
    const sale = parseFloat(item.prices.price);

    const currencyMinor = item.prices.currency_minor_unit;

    const itemPrice = getPriceWithMinors(
      (reg - sale) * item.quantity,
      currencyMinor
    );

    return sum + itemPrice;
  }, 0);

  const totalPriceWithoutSaleFormatted = new Intl.NumberFormat("ru-RU").format(
    totalPriceWithoutSale
  );

  const totalDiscountFormatted = new Intl.NumberFormat("ru-RU").format(
    totalDiscount
  );

  const totalPrice = new Intl.NumberFormat("ru-RU").format(
    getPriceWithMinors(
      cartData.totals.total_price,
      cartData.totals.currency_minor_unit
    )
  );

  return {
    totalPriceWithoutSale: totalPriceWithoutSaleFormatted,
    totalDiscount: totalDiscountFormatted,
    totalPrice,
    currencySymbol,
  };
};
