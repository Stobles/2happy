import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { cn } from "@/shared/utils/cn";
import { ComponentPropsWithoutRef } from "react";
import { useCartItemInfo } from "../../hooks/useCartItemInfo";
import { CartItemResponse } from "../../types";
import { Chip } from "@/shared/components/UI/Chip";

const CartMediumCard = ({
  cartItem,
  className,
  ...props
}: { cartItem: CartItemResponse } & ComponentPropsWithoutRef<"article">) => {
  const {
    image,
    name,
    size,
    color,
    quantity,
    regularPrice,
    salePrice,
    salePercent,
    isOnSale,
    currencySymbol,
  } = useCartItemInfo(cartItem);
  return (
    <article
      className={cn(
        "w-full flex gap-6 h-[248px] pb-8 border-b border-gray last:border-b-0",
        className
      )}
      {...props}
    >
      <ImageWithLoader
        wrapperClassName="w-[148px] shrink-0"
        src={image.src}
        alt={image.alt}
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h5 className="text-h5">{name}</h5>
          <div className="text-h5 flex gap-2">
            <span className={cn(isOnSale && "line-through text-gray-middle")}>
              {regularPrice} {currencySymbol}
            </span>
            {isOnSale && (
              <>
                <span>
                  {salePrice} {currencySymbol}
                </span>
                <Chip variant="pink" size="small">
                  - {salePercent} %
                </Chip>
              </>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-body2">{size}</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-description">{color}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-2">
            <IconButton
              className="border border-black"
              variant="secondary"
              size="extraSmall"
            >
              <MinusIcon />
            </IconButton>
            <div className="text-body2 py-1 px-8 bg-gray-light">{quantity}</div>
            <IconButton
              className="border border-black "
              variant="secondary"
              size="extraSmall"
            >
              <PlusIcon />
            </IconButton>
            <button
              data-tooltip-id="cart-delete"
              data-tooltip-content="Удалить товар"
            >
              <TrashIcon className="stroke-gray-middle hover:stroke-red" />
              <StyledTooltip id="cart-delete" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartMediumCard;
