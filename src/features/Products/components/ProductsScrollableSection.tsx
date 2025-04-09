import Container from "@/shared/components/UI/Container";
import { ScrollArea, ScrollBar } from "@/shared/components/UI/ScrollArea";
import Section from "@/shared/components/UI/Section";
import SectionImage from "@/shared/components/UI/SectionImage";
import ProductServerCard from "./ProductCards/ProductServerCard";
import ProductCardLoader from "./ProductCards/ProductCardLoader";
import { ProductServer } from "../types";

const ProductsScrollableSection = ({
  title,
  data,
  isLoading,
}: {
  title: string;
  data: ProductServer[] | undefined;
  isLoading: boolean;
}) => {
  if (!isLoading && !data) return null;

  return (
    <Section>
      <Container className="flex flex-col gap-16 my-section">
        <SectionImage />
        <h2 className="text-h2">{title}</h2>
        <ScrollArea>
          <div className="grid grid-flow-col auto-cols-[288px] gap-6 h-[552px] mb-6">
            {isLoading && (
              <>
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
                <ProductCardLoader />
              </>
            )}
            {data?.map((product) => (
              <ProductServerCard key={product.id} product={product} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Container>
    </Section>
  );
};

export default ProductsScrollableSection;
