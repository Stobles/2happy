import RecentList from "@/features/Products/components/ProductsScrollableSection";
import AboutSection from "../components/AboutSection/AboutSection";
import AdditionSection from "../components/AdditionSection";
import ProductSection from "../components/ProductSection/ProductSection";
import RecentSection from "../components/RecentSection";

const ProductPage = ({
  params: { productId },
}: {
  params: { productId: string };
}) => {
  return (
    <>
      <ProductSection />
      <AboutSection />
      <AdditionSection />
      <RecentSection productId={Number(productId)} />
    </>
  );
};

export default ProductPage;
