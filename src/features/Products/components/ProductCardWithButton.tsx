import { Button } from "@/components/UI/Button";
import { Product } from "../types";
import ProductCard from "./ProductCard";

const ProductCardWithButton = ({ product }: { product: Product }) => {
  return (
    <div className="group/product flex flex-col gap-4 bg-white p-4 hover:shadow-elevation-4 transition-shadow">
      <ProductCard product={product} />
      <Button className="w-full" size="small">
        Подробнее
      </Button>
    </div>
  );
};

export default ProductCardWithButton;
