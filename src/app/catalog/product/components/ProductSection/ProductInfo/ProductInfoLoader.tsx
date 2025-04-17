import { ButtonLoader } from "@/shared/components/UI/Button";
import { Separator } from "@/shared/components/UI/Separator";
import { Skeleton } from "@/shared/components/UI/Skeleton";

const ProductInfoLoader = () => {
  return (
    <div className="flex flex-col gap-2 justify-between flex-1 basis-[49%]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <Skeleton className="w-2/3 h-8" />
            <Skeleton className="w-6 h-6" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-24 h-8" />
            </div>

            <div className="text-gray-middle text-description">
              Включая налоги, без стоимости доставки
            </div>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <Skeleton className="w-[100px] h-4" />
          </div>
          <div className="flex gap-2">
            <ButtonLoader className="w-12" size="iconSmall" />
            <ButtonLoader className="w-12" size="iconSmall" />
            <ButtonLoader className="w-12" size="iconSmall" />
            <ButtonLoader className="w-12" size="iconSmall" />
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <Skeleton className="w-[100px] h-4" />
            <Skeleton className="w-[80px] h-4" />
          </div>
          <div className="flex gap-2">
            <ButtonLoader className="w-12" size="iconSmall" />
            <ButtonLoader className="w-12" size="iconSmall" />
            <ButtonLoader className="w-12" size="iconSmall" />
            <ButtonLoader className="w-12" size="iconSmall" />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <ButtonLoader className="w-full" />
        <ButtonLoader className="w-full" />
        <ButtonLoader size="iconNormal" />
        {/* <Button className="w-full"> Добавить в корзину</Button>
        <OutOfStockDialog
          trigger={
            <Button className="w-full" variant="secondary">
              Купить
            </Button>
          }
        />
        <Button className="[&_svg]:fill-transparent" size="iconNormal">
          <HeartIcon className="stroke-white" />
        </Button> */}
      </div>
    </div>
  );
};

export default ProductInfoLoader;
