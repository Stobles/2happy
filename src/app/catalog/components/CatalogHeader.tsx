"use client";

import { useProductsStore } from "@/features/Products/store/productsStore";

const CatalogHeader = ({ name }: { name: string }) => {
  const { totalItems } = useProductsStore();
  return (
    <div className="w-full flex flex-col gap-16">
      <div className="flex items-end gap-2">
        <h2 className="text-h2">{name} /</h2>
        <span className="text-body2 mb-1 text-gray-middle">
          {totalItems} товаров
        </span>
      </div>
    </div>
  );
};

export default CatalogHeader;
