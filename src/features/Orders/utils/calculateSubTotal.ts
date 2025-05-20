import { OrderProductItem } from "../types";

export const calculateSubtotalFromLineItems = (
  lineItems: OrderProductItem[]
) => {
  return lineItems.reduce((sum, item) => {
    const itemSubtotal = parseFloat(item.subtotal);
    return sum + (isNaN(itemSubtotal) ? 0 : itemSubtotal);
  }, 0);
};
