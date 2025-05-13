import { useUpdateCartItem } from "../api/cartMutations";
import { CartItemResponse } from "../types";

export const useChangeQuantity = () => {
  const { mutate: updateCartItem } = useUpdateCartItem({});

  const handleDecreaseQuantity = (cartItem: CartItemResponse) =>
    updateCartItem({ key: cartItem.key, quantity: cartItem.quantity - 1 });

  const handleIncreaseQuantity = (cartItem: CartItemResponse) =>
    updateCartItem({ key: cartItem.key, quantity: cartItem.quantity + 1 });

  const isDecreaseDisabled = (cartItem: CartItemResponse) => {
    if (cartItem.stock_status != "instock") return true;

    return cartItem.quantity <= cartItem.quantity_limits.minimum;
  };

  const isIncreaseDisabled = (cartItem: CartItemResponse) => {
    if (cartItem.stock_status != "instock") return true;

    return (
      cartItem.quantity >= cartItem.stock_quantity ||
      cartItem.quantity >= cartItem.quantity_limits.maximum
    );
  };

  return {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  };
};
