"use client";

import { cn } from "@/shared/utils/cn";
import { useProductsList } from "../hooks/useProductsList";

import { ProductCardLoader } from "./Cards/ProductServerCard";
import ProductServerCard from "./Cards/ProductServerCard";
import { RefObject } from "react";

const ProductsList = ({
  scrollToRef,
  category,
  tag,
}: {
  scrollToRef: RefObject<HTMLDivElement | null>;
  category?: number;
  tag?: number;
}) => {
  const { data, gridType, isPending, isPlaceholderData } = useProductsList({
    category,
    tag,
  });

  if (!isPending && !data?.items.length) {
    return (
      <div className="flex items-center justify-center w-full h-[552px]">
        <h2 className="text-h2">Ничего не найдено</h2>
      </div>
    );
  }

  return (
    <div ref={scrollToRef} className="relative">
      {isPlaceholderData && (
        <div className="absolute flex justify-center items-center w-full h-full pointer-events-none z-10">
          <h2 className="text-h1Akira animate-pulse">2HAPPY</h2>
        </div>
      )}
      <div
        className={cn(
          "grid gap-x-6 gap-y-10 grid-flow-row",
          gridType === "small"
            ? "grid-cols-4 auto-rows-[552px] min-h-[552px]"
            : "grid-cols-2 auto-rows-[928px] min-h-[928px]",
          isPlaceholderData && "blur-sm pointer-events-none"
        )}
      >
        {isPending && !isPlaceholderData && (
          <>
            <ProductCardLoader />
            <ProductCardLoader />
            <ProductCardLoader />
            <ProductCardLoader />
          </>
        )}

        {data?.items.map((product) => (
          <ProductServerCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
