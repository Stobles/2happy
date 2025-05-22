"use client";

import CatalogPagination from "../../../shared/components/CatalogPagination";
import CatalogHeader from "./CatalogControls";
import ProductsList from "@/features/Products/components/ProductsList";
import { ReactNode, useRef } from "react";
import { usePaginationStore } from "@/features/Products/store/paginationStore";
import { useCatalogStore } from "@/features/Products/store/catalogStore";

const Catalog = ({
  category,
  tag,
  filtersListSlot,
}: {
  category?: number;
  tag?: number;
  filtersListSlot: ReactNode;
}) => {
  const scrollToRef = useRef<HTMLDivElement>(null);

  // const { page, per_page, setPage } = usePaginationStore();
  // const { totalItems, totalPages } = useCatalogStore();
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CatalogHeader />
        {filtersListSlot}
        <ProductsList scrollToRef={scrollToRef} tag={tag} category={category} />
      </div>
    </div>
  );
};

export default Catalog;
