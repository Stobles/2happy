import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import {
  IconButton,
  IconButtonLoader,
} from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import { CartItemResponse } from "../../types";
import { getCartItemInfo } from "../../utils/getCartItemInfo";
import { cn } from "@/shared/utils/cn";
import { Chip } from "@/shared/components/UI/Chip";
import { useDeleteCartItem } from "../../api/cartMutations";
import Link from "next/link";
import { paths } from "@/config/paths";
import { ReactNode } from "react";
import { Skeleton } from "@/shared/components/UI/Skeleton";
import { useChangeQuantity } from "../../hooks/useChangeQuantity";

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
    categories,
    isInStock,
  } = getCartItemInfo(cartItem);

  const { mutate: deleteCartItem, isPending } = useDeleteCartItem({});

  const {
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    isDecreaseDisabled,
    isIncreaseDisabled,
  } = useChangeQuantity();

  const lastCategory = categories[categories.length - 1];

  const productLink = isInStock
    ? paths.product.getHref(parentId, name, {
        color: variation.color,
        size: variation.size,
      })
    : paths.catalog.category.getHref(
        lastCategory.id,
        lastCategory.slug,
        lastCategory.name,
        lastCategory.parent
      );

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
            <Link href={productLink}>
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
            {isInStock ? (
              <>
                <div className="flex gap-2 h-min">
                  <IconButton
                    variant="secondary"
                    className="border border-main"
                    size="small"
                    disabled={isDecreaseDisabled(cartItem)}
                    onClick={() => handleDecreaseQuantity(cartItem)}
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
                    disabled={isIncreaseDisabled(cartItem)}
                    onClick={() => handleIncreaseQuantity(cartItem)}
                  >
                    <PlusIcon />
                  </IconButton>
                </div>
                <div className="flex justify-center">
                  <span>
                    {sumPrice} {currencySymbol}
                  </span>
                </div>
              </>
            ) : (
              <div className="col-span-2 justify-items-end">
                <Chip className="w-min" variant="gray" size="medium">
                  Нет на складе
                </Chip>
              </div>
            )}
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

export const CartDefaultCardLoader = () => {
  return (
    <div className="w-full py-8 border-b border-gray last:border-0">
      <div className="grid grid-cols-[520px_1fr] gap-x-12">
        <div className="flex gap-6">
          <Skeleton className="w-[120px] shrink-0 h-full" />
          <div className="flex flex-col gap-6">
            <Skeleton className=" w-[220px] h-[22px]" />
            <Skeleton className=" w-[180px] h-[24px]" />
            <div className="flex flex-col gap-2">
              <Skeleton className=" w-[140px] h-[24px]" />
              <Skeleton className=" w-[140px] h-[24px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-cartCard justify-between w-full h-min items-start">
            <div className="flex flex-col gap-2 items-center">
              <Skeleton className=" w-[100px] h-[18px]" />
            </div>
            <div className="flex gap-2 h-min">
              <IconButtonLoader size="small" />
              <Skeleton className="w-[80px] h-[40px]" />
              <IconButtonLoader size="small" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="w-[100px] h-[18px]" />
            </div>
            <div className="flex justify-center">
              <Skeleton className="size-[40px]" />
            </div>
          </div>
          <div className="flex gap-2 justify-end">
            <IconButtonLoader size="small" />
            <IconButtonLoader size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};
