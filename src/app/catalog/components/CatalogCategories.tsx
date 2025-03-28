"use client";

import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { useSuspenseQuery } from "@tanstack/react-query";

const CatalogCategories = () => {
  const { data } = useSuspenseQuery(getCategoriesQueryOptions());

  if (data.totalItems) return <CategorySlider categories={data?.items} />;

  return null;
};

export default CatalogCategories;
