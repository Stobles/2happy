import { ReactNode } from "react";
import CartSimilarProducts from "./cart/components/CartSimilarProducts";

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <CartSimilarProducts />
    </>
  );
};

export default CartLayout;
