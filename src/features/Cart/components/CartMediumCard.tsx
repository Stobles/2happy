import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import { cn } from "@/shared/lib/utils";
import { ComponentPropsWithoutRef } from "react";

const CartMediumCard = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) => {
  return (
    <article
      className={cn(
        "w-full flex gap-6 h-[248px] pb-8 border-b border-gray",
        className
      )}
      {...props}
    >
      <ImageWithLoader
        wrapperClassName="w-[148px]"
        src="/images/Home/Main/slider-2.jpg"
        alt="product-alt"
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h5 className="text-h5">
            Платье трикотажное с отделкой из сетки и принтом /
          </h5>
          <span>85 000 &#8376;</span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
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
        <div className="flex gap-4">
          <div className="flex gap-2">
            <IconButton
              className="border border-black"
              variant="secondary"
              size="extraSmall"
            >
              <MinusIcon />
            </IconButton>
            <div className="text-body2 py-1 px-8 bg-gray-light">1</div>
            <IconButton
              className="border border-black"
              variant="secondary"
              size="extraSmall"
            >
              <PlusIcon />
            </IconButton>
            <button>
              <TrashIcon className="stroke-gray-middle hover:stroke-red" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartMediumCard;
