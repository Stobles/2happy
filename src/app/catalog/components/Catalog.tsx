import CatalogPagination from "./CatalogPagination";
import CatalogHeader from "./CatalogControls";
import ProductsList from "@/features/Products/components/ProductsList";
import { ReactNode } from "react";

const Catalog = ({
  category,
  filtersListSlot,
}: {
  category?: number;
  filtersListSlot: ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CatalogHeader />
        {filtersListSlot}
        <ProductsList category={category} />
      </div>

      <CatalogPagination />
    </div>
  );
};

export default Catalog;
