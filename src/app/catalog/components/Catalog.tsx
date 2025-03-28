"use client";

import { getProductsListParameters } from "@/features/Products/api/productsApi";
import { TProductGrid } from "@/features/Products/types";
import { useState } from "react";

import CatalogPagination from "./CatalogPagination";
import CatalogHeader from "./CatalogControls";
import ProductsList from "@/features/Products/components/ProductsList";

const Catalog = () => {
  const [grid, setGrid] = useState<TProductGrid>("small");

  const [params, setParams] = useState<getProductsListParameters>({
    page: 1,
    per_page: 1,
  });

  const handleGridChange = (value: TProductGrid) => {
    if (value === "small") setParams((prev) => ({ ...prev, per_page: 40 }));
    if (value === "big") setParams((prev) => ({ ...prev, per_page: 10 }));
    setGrid(value);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <CatalogHeader onGridChange={handleGridChange} />
        <ProductsList grid={grid} params={params} />
      </div>

      <CatalogPagination
        page={params.page}
        per_page={params.per_page}
        setParams={setParams}
      />
    </div>
  );
};

export default Catalog;
