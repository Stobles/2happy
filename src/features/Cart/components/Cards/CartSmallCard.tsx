import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";

const CartSmallCard = () => {
  return (
    <article className="flex flex-col gap-4 text-title pb-6 border-b border-gray last:border-b-0 last:pb-0">
      <div className="flex gap-4">
        <ImageWithLoader
          wrapperClassName="w-16 shrink-0"
          src="/images/Cart/Cart-1.jpg"
          alt="cart-item-image"
        />
        <div className="flex flex-col gap-2">
          <div>
            <h5>Платье трикотажное с отделкой из сетки и принтом /</h5>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-body2">S</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-description">Черный</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span>Цена</span>
          <span className="text-gray-middle">85 000 T</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Количество</span>
          <span className="text-gray-middle">1</span>
        </div>

        <div className="flex flex-col gap-2">
          <span>Сумма</span>
          <span className="text-gray-middle">85 000 T</span>
        </div>
      </div>
    </article>
  );
};

export default CartSmallCard;
