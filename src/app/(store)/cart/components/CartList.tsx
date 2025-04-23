import AuthModal from "@/features/Auth/components/AuthModal";
import CartCard from "@/features/Cart/components/Cards/CartDefaultCard";
import WarningIcon from "@/shared/components/icons/WarningIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import Link from "next/link";

const CartList = () => {
  return (
    <Container className="my-section flex-col gap-12">
      <div className="flex gap-2 items-end">
        <h1 className="text-h2">Корзина /</h1>
        <span className="text-body2 text-gray-middle mb-1"> 3 товара</span>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-[520px_1fr] gap-x-12 py-3 text-body2 text-gray-middle border-b border-gray">
          <div>Товар</div>
          <div className="grid justify-items-center items-center grid-cols-cartCard justify-between">
            <div>Цена</div>
            <div>Количество</div>
            <div>Сумма</div>
          </div>
        </div>
        <div className="flex flex-col">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
      <div className="grid grid-cols-[repeat(2,_minmax(300px,_490px))_296px] gap-x-6">
        <div className="flex flex-col gap-8 shadow-elevation-6 rounded-xs border border-main py-8 px-6">
          <h4 className="text-h4">Сумма заказа</h4>
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
          <div className="flex justify-between text-h4">
            <span className="">Итого</span>
            <span className="">195 000 ₸</span>
          </div>
          <AuthModal
            triggerProps={{ asChild: true }}
            buttonSlot={
              <Button className="w-full" variant="secondary" size="normal">
                Продолжить как гость
              </Button>
            }
          >
            <Button variant="primary" size="medium" className="w-full">
              Перейти к оплате
            </Button>
          </AuthModal>
        </div>
        <div className="flex gap-2 bg-light-disabled py-10 px-4 rounded-xs h-min">
          <WarningIcon className="shrink-0" />
          <div className="flex flex-col gap-2">
            <h5 className="text-h5">Обратите внимание</h5>
            <p className="text-body-2">
              Стоимость доставки не включена в итоговую сумму заказа.
              Она рассчитывается при оформлении. Подробнее о тарифах и сроках
              можно узнать по 
              <Link className="underline" href="/">
                ссылке
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center relative rounded-xs border border-main px-4 shadow-elevation-6">
          <div className="absolute w-full h-full bg-gradient-7 z-10 opacity-50"></div>
          <ImageWithLoader
            wrapperClassName="absolute top-0 left-0"
            className="object-center"
            src="/images/Cart/Cart-1.jpg"
            alt="cart-image"
          />

          <Button
            variant="secondary"
            size="medium"
            className="w-full bg-white z-20"
          >
            Продолжить покупки
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CartList;
