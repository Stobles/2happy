import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { CartItemResponse } from "../../types";
import { useCartItemInfo } from "../../hooks/useCartItemInfo";
import { cn } from "@/shared/utils/cn";
import { Chip } from "@/shared/components/UI/Chip";
import { useDeleteCartItem, useUpdateCartItem } from "../../api/cartMutations";
import Link from "next/link";
import { paths } from "@/config/paths";
import { ReactNode } from "react";

const CartDefaultCard = ({
  cartItem,
  renderButtons,
}: {
  cartItem: CartItemResponse;
  renderButtons?: (cartItem: CartItemResponse) => ReactNode;
}) => {
  const {
    key,
    parentId,
    image,
    name,
    size,
    color,
    quantity,
    regularPrice,
    sku,
    salePrice,
    salePercent,
    variation,
    isOnSale,
    sumPrice,
    currencySymbol,
  } = useCartItemInfo(cartItem);

  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const { mutate: updateCartItem } = useUpdateCartItem({});
  return (
    <article
      className={cn(
        "w-full py-8 border-b border-gray",
        isPending && "opacity-50 pointer-events-none"
      )}
    >
      <div className="grid grid-cols-[520px_1fr] gap-x-12">
        <div className="flex gap-6">
          <ImageWithLoader
            wrapperClassName="w-[120px] shrink-0"
            src={image.src}
            alt={image.alt}
          />
          <div className="flex flex-col gap-6">
            <Link
              href={paths.product.getHref(parentId, name, {
                color: variation.color,
                size: variation.size,
              })}
            >
              <h5 className="text-h5">{name}</h5>
            </Link>
            <div className="flex gap-4 text-body-2">
              <span>Артикул:</span>
              <span>{sku}</span>
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
                <span className="text-gray-middle text-description">
                  {color}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-cartCard justify-between w-full h-min items-start">
            <div className="flex flex-col gap-2 items-center">
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
            <div className="flex gap-2 h-min">
              <IconButton
                variant="secondary"
                className="border border-main"
                size="small"
                disabled={quantity <= cartItem.quantity_limits.maximum}
                onClick={() => {
                  updateCartItem({ key, quantity: quantity - 1 });
                }}
              >
                <MinusIcon />
              </IconButton>
              <div className="flex justify-center w-14 p-2 bg-gray-light">
                <span className="text-body2">{quantity}</span>
              </div>
              <IconButton
                variant="secondary"
                className="border border-main"
                size="small"
                disabled={quantity >= cartItem.quantity_limits.maximum}
                onClick={() => {
                  updateCartItem({ key, quantity: quantity + 1 });
                }}
              >
                <PlusIcon />
              </IconButton>
            </div>
            <div className="flex justify-center">
              <span>
                {sumPrice} {currencySymbol}
              </span>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  deleteCartItem({ key });
                }}
                data-tooltip-id="cart-delete"
                data-tooltip-content="Удалить товар"
              >
                <TrashIcon className=" hover:stroke-red" />
                <StyledTooltip id="cart-delete" />
              </button>
            </div>
          </div>
          {renderButtons && renderButtons(cartItem)}
        </div>
      </div>
    </article>
  );
};

export default CartDefaultCard;
