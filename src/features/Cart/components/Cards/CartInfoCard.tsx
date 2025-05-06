import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import { CartItemResponse } from "../../types";
import { useCartItemInfo } from "../../hooks/useCartItemInfo";

const CartInfoCard = ({ cartItem }: { cartItem: CartItemResponse }) => {
  const {
    image,
    name,
    size,
    color,
    quantity,
    price,
    sumPrice,
    currencySymbol,
  } = useCartItemInfo(cartItem);
  return (
    <article className="flex flex-col gap-4 w-full pb-6 border-b border-b-gray last:border-b-0 last:pb-0 text-title-em">
      <div className="flex gap-4">
        <ImageWithLoader
          wrapperClassName="w-[5.33em] h-[8em] shrink-0"
          src={image.src}
          alt={image.alt}
        />
        <div className="flex flex-col justify-between">
          <h5 className="max-w-[230px]">{name}</h5>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{size}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle">{color}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span>Цена</span>
          <span className="text-gray-middle">
            {price} {currencySymbol}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Количество</span>
          <span className="text-gray-middle">{quantity}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span>Сумма</span>
          <span className="text-gray-middle">
            {sumPrice} {currencySymbol}
          </span>
        </div>
      </div>
    </article>
  );
};

export default CartInfoCard;
