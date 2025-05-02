import { Button } from "@/shared/components/UI/Button";
import CartMediumCard from "../Cards/CartMediumCard";
import Link from "next/link";
import { paths } from "@/config/paths";
import { Dispatch, SetStateAction } from "react";
import { CartResponse } from "../../types";
import { useCartInfo } from "../../hooks/useCartInfo";

const CartSheetContent = ({
  cartData,
  setOpen,
}: {
  cartData: CartResponse;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { totalPriceWithoutSale, totalDiscount, totalPrice, currencySymbol } =
    useCartInfo(cartData);

  return (
    <div className="flex flex-col justify-between w-full h-full flex-1 overflow-hidden">
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex flex-col gap-6 overflow-scroll">
          {cartData.items.map((item) => (
            <CartMediumCard
              key={item.key}
              cartItem={item}
              className="flex-shrink-0"
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <h5 className="text-h5">Сумма заказа</h5>
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between">
                <span className="text-body2">Товары</span>
                <span className="text-body1">
                  {totalPriceWithoutSale} {currencySymbol}
                </span>
              </div>
              <div className="w-full flex gap-2 justify-between">
                <span className="text-body2">Скидка</span>
                <span className="text-body1">
                  - {totalDiscount} {currencySymbol}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex gap-2 justify-between text-h4">
              <h5>Итого</h5>
              <span>
                {totalPrice} {currencySymbol}
              </span>
            </div>
            <div className="text-body2 text-gray-middle">
              Без учета стоимости доставки
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Button variant="primary" size="large" className="w-full">
          Оформить заказ
        </Button>
        <Button
          className="w-full"
          variant="secondary"
          size="large"
          onClick={() => {
            setOpen(false);
          }}
          asChild
        >
          <Link href={paths.cart.getHref()}>Перейти в корзину</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartSheetContent;
