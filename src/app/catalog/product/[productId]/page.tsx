import AboutSection from "../components/AboutSection/AboutSection";
import AdditionSection from "../components/AdditionSection";
import ProductSection from "../components/ProductSection/ProductSection";
import RecentSection from "../components/RecentSection";

const ProductPage = async ({}: { params: Promise<{ productId: string }> }) => {
  return (
    <>
      <ProductSection />
      <AboutSection />
      <AdditionSection />
      <RecentSection />
    </>
  );
};

export default ProductPage;
