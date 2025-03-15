import ProductsList from "@/features/Products/components/ProductsList";
import { PRODUCTS } from "../[category]/consts";
import { Button } from "@/components/UI/Button";
import CatalogPagination from "./CatalogPagination";
import CatalogHeader from "./CatalogHeader";

const Catalog = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CatalogHeader />
        <ProductsList products={PRODUCTS} />
      </div>
      <Button className="w-full" variant="secondary" size="normal">
        Показать еще
      </Button>
      <div className="flex justify-between">
        <CatalogPagination />
        <span className="text-gray-middle text-button-xs">24 из 72</span>
      </div>
    </div>
  );
};

export default Catalog;
