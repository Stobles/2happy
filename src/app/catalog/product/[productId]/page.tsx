import RecentList from "@/features/Products/components/ProductsScrollableSection";
import AboutSection from "../components/AboutSection/AboutSection";
import AdditionSection from "../components/AdditionSection";
import ProductSection from "../components/ProductSection/ProductSection";
import RecentSection from "../components/RecentSection";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params;
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
