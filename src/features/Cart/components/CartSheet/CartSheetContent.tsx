import { Button } from "@/shared/components/UI/Button";
import CartMediumCard from "../Cards/CartMediumCard";

const CartSheetContent = () => {
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div>
        <div className="flex flex-col gap-6 overflow-scroll">
          <CartMediumCard className="flex-shrink-0" />
        </div>
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col gap-4">
            <h5 className="text-h5">Сумма заказа</h5>
            <div className="flex flex-col gap-2">
              <div className="w-full flex justify-between">
                <span className="text-body2">Товары</span>
                <span className="text-body1">425 000 &#8376;</span>
              </div>
              <div className="w-full flex gap-2 justify-between">
                <span className="text-body2">Скидка</span>
                <span className="text-body1">0 &#8376;</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="w-full flex gap-2 justify-between text-h4">
              <h5>Итого</h5>
              <span>425 000 &#8376;</span>
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
        <Button className="w-full" variant="secondary" size="large">
          Перейти в корзину
        </Button>
      </div>
    </div>
  );
};

export default CartSheetContent;
