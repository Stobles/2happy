import ProductCardLoader from "@/features/Products/components/ProductCards/ProductCardLoader";
import CustomSlide from "./CustomSlide";
import { SIZES, SIZES_TW, SLIDES_SIZES } from "./consts";

const NewCollectionLoader = () => {
  return (
    <div className="flex h-[500px] gap-6">
      <ProductCardLoader className={SIZES_TW.big} />
      <ProductCardLoader className={SIZES_TW.small} />
      <div className="w-[280px] h-[288px] shrink-0">
        <CustomSlide />
      </div>
      <ProductCardLoader className={SIZES_TW.small} />
      <ProductCardLoader className={SIZES_TW.medium} />
    </div>
  );
};

export default NewCollectionLoader;
