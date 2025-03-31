"use client";

import CatalogPagination from "./CatalogPagination";
import CatalogHeader from "./CatalogControls";
import ProductsList from "@/features/Products/components/ProductsList";
import { usePaginationStore } from "@/features/Products/store/paginationStore";

const Catalog = ({ category }: { category?: string }) => {
  const { page, per_page, setPage } = usePaginationStore();

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CatalogHeader />
        <ProductsList category={category} />
      </div>

      <CatalogPagination page={page} per_page={per_page} setPage={setPage} />
    </div>
  );
};

export default Catalog;
