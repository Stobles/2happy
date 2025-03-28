"use client";

import { useCatalogStore } from "@/features/Products/store/productsStore";
import { useSearchParams } from "next/navigation";

const CatalogHeader = ({ name }: { name?: string }) => {
  const { totalItems } = useCatalogStore();

  const searchParams = useSearchParams();
  return (
    <div className="w-full flex flex-col gap-16">
      <div className="flex items-end gap-2">
        <h2 className="text-h2">{name ?? searchParams.get("name")} /</h2>
        <span className="text-body2 mb-1 text-gray-middle">
          {totalItems} товаров
        </span>
      </div>
    </div>
  );
};

export default CatalogHeader;
