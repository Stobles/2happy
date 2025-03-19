import { Product, TProductGrid } from "../types";
import ProductCard from "./ProductCards/ProductCard";

const ProductsList = ({
  products,
  grid = "small",
}: {
  products: Product[];
  grid?: TProductGrid;
}) => {
  return (
    <div
      className={`grid gap-x-6 gap-y-10 grid-flow-row ${
        grid === "small"
          ? "grid-cols-4 auto-rows-[552px]"
          : "grid-cols-2 auto-rows-[928px]"
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
