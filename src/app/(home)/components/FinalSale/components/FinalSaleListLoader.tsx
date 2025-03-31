import { Skeleton } from "@/components/UI/Skeleton";
import ProductCardLoader from "@/features/Products/components/ProductCards/ProductCardLoader";

const FinalSaleListLoader = () => {
  return (
    <>
      <ProductCardLoader />
      <ProductCardLoader />
      <ProductCardLoader />
    </>
  );
};

export default FinalSaleListLoader;
