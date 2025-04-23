import HeartIcon from "@/shared/components/icons/HeartIcon";
import MinusIcon from "@/shared/components/icons/MinusIcon";
import PlusIcon from "@/shared/components/icons/PlusIcon";
import TrashIcon from "@/shared/components/icons/TrashIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";

const CartDefaultCard = () => {
  return (
    <article className="w-full py-8 border-b border-gray">
      <div className="grid grid-cols-[520px_1fr] gap-x-12">
        <div className="flex gap-6">
          <ImageWithLoader
            wrapperClassName="w-[120px] shrink-0"
            src="/images/Cart/Cart-1.jpg"
            alt="cart-item-image"
          />
          <div className="flex flex-col gap-6">
            <h5 className="text-h5">
              Платье трикотажное с отделкой из сетки и принтом /
            </h5>
            <div className="flex gap-4 text-body-2">
              <span>Артикул:</span>
              <span>0101010101</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <span>Размер</span>
                <Separator className="h-4/6" orientation="vertical" />
                <span className="text-gray-middle text-body2">S</span>
              </div>
              <div className="flex items-center gap-4">
                <span>Цвет</span>
                <Separator className="h-4/6" orientation="vertical" />
                <span className="text-gray-middle text-description">
                  Черный
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-cartCard justify-between w-full h-min items-center">
            <div className="flex justify-center">
              <span>85 000 ₸</span>
            </div>
            <div className="flex gap-2 h-min">
              <IconButton
                variant="secondary"
                className="border border-main"
                size="small"
              >
                <MinusIcon />
              </IconButton>
              <div className="flex justify-center w-14 p-2 bg-gray-light">
                <span className="text-body2">1</span>
              </div>
              <IconButton
                variant="secondary"
                className="border border-main"
                size="small"
              >
                <PlusIcon />
              </IconButton>
            </div>
            <div className="flex justify-center">
              <span>85 000 ₸</span>
            </div>
            <div className="flex justify-center">
              <button
                data-tooltip-id="cart-delete"
                data-tooltip-content="Удалить товар"
              >
                <TrashIcon className=" hover:stroke-red" />
                <StyledTooltip id="cart-delete" />
              </button>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <IconButton
              variant="secondary"
              size="small"
              className="border border-gray"
            >
              <HeartIcon />
            </IconButton>
            <IconButton
              variant="secondary"
              size="small"
              className="border border-gray"
            >
              <HeartIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartDefaultCard;
