import { Skeleton } from "@/shared/components/UI/Skeleton";

const ProductSliderLoader = () => {
  return (
    <div className="product-slider flex gap-6 flex-1 basis-[51%] overflow-hidden">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-[80px] h-[102px]" />
        <Skeleton className="w-[80px] h-[102px]" />
        <Skeleton className="w-[80px] h-[102px]" />
        <Skeleton className="w-[80px] h-[102px]" />
        <Skeleton className="w-[80px] h-[102px]" />
      </div>

      <Skeleton className="w-full h-full" />
    </div>
  );
};

export default ProductSliderLoader;
