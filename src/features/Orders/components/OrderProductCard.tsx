import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Separator } from "@/shared/components/UI/Separator";

const OrderProductCard = () => {
  return (
    <article className="flex gap-12 justify-between items-center py-8 pr-4 border-b border-b-gray last:border-b-0">
      <div className="flex gap-6">
        <ImageWithLoader
          src="/images/Home/Main/slider-1.jpg"
          wrapperClassName="w-[96px] h-[128]"
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h5 className="text-h5">
            Платье трикотажное с отделкой из сетки и принтом /
          </h5>
          <div className="flex gap-4 text-gray-middle">
            <span>Артикул:</span>
            <span>0101010101</span>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-4">
              <span>Размер</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-body2">S</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Цвет</span>
              <Separator className="h-4/6" orientation="vertical" />
              <span className="text-gray-middle text-body2">Черный</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[600px] w-full grid grid-cols-3 items-center">
        <span>85 000 ₸</span>
        <div className="bg-gray-light text-body2 p-2 justify-self-center">
          1 шт
        </div>
        <span className="justify-self-end">85 000 ₸</span>
      </div>
    </article>
  );
};

export default OrderProductCard;
