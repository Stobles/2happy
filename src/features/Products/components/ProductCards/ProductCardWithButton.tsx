import { Button } from "@/components/UI/Button";
import { Product } from "../../types";
import ProductCard from "./ProductCard";

const ProductCardWithButton = ({
  product,
  buttonText,
  onClick,
}: {
  product: Product;
  buttonText: string;
  onClick?: () => void;
}) => {
  return (
    <div className="group/product flex w-full h-full flex-col gap-4 bg-white p-4 hover:shadow-elevation-4 transition-shadow">
      <ProductCard product={product} />
      <Button className="w-full" size="small" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

export default ProductCardWithButton;
