import Container from "@/shared/components/UI/Container";
import ProductSlider from "./ProductSlider/ProductSlider";
import ProductInfo from "./ProductInfo/ProductInfo";
import { Suspense } from "react";
import ProductInfoLoader from "./ProductInfo/ProductInfoLoader";
import ProductSliderLoader from "./ProductSlider/ProductSliderLoader";

const ProductSection = () => {
  return (
    <div className="border-b border-main">
      <Container className="my-section flex gap-12 h-[552px] ">
        <Suspense fallback={<ProductSliderLoader />}>
          <ProductSlider />
        </Suspense>
        <Suspense fallback={<ProductInfoLoader />}>
          <ProductInfo />
        </Suspense>
      </Container>
    </div>
  );
};

export default ProductSection;
