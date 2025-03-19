import Container from "@/components/UI/Container";
import SectionImage from "@/components/UI/SectionImage";
import ProductSlider from "./ProductSlider/ProductSlider";
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductSection = () => {
  return (
    <div className="border-b border-main">
      <Container className="my-section flex gap-12 h-[552px] ">
        <SectionImage />
        <ProductSlider />
        <ProductInfo />
      </Container>
    </div>
  );
};

export default ProductSection;
