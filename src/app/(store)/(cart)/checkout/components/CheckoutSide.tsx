import CartSmallCard from "@/features/Cart/components/Cards/CartSmallCard";
import EditIcon from "@/shared/components/icons/EditIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import Link from "next/link";

const CheckoutSide = () => {
  return (
    <aside className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 border border-main rounded-xs py-7 px-6">
        <h5 className="text-h5">Сумма заказа</h5>
        <div className="flex flex-col text-gray-dark text-body2">
          <div className="flex justify-between py-3 border-b border-gray">
            <span>Товары:</span>
            <span>255 000 ₸</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray">
            <span>Скидка:</span>
            <span>- 55 000 ₸</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-h5 h-12">
          <span>Итого:</span>
          <span>195 000 T</span>
        </div>
      </div>
      <div className="text-title rounded-xs bg-light-disabled p-4">
        Стоимость доставки не включена в итоговую сумму заказа.
        Она рассчитывается при оформлении. Подробнее о тарифах и сроках можно
        узнать по 
        <Link href="/" className="underline">
          ссылке
        </Link>
        .
      </div>
      <div className="flex flex-col gap-6 border border-main rounded-xs p-6">
        <div className="flex justify-between">
          <h5 className="text-h5">
            Корзина <span className="text-body2 text-gray-middle">(3)</span>
          </h5>
          <IconButton
            variant="secondary"
            size="extraSmall"
            className="p-1 [&_svg]:size-6"
          >
            <EditIcon />
          </IconButton>
        </div>
        <div className="flex flex-col gap-8">
          <CartSmallCard />
          <CartSmallCard />
          <CartSmallCard />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutSide;
