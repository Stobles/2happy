"use client";

import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { CategorySlider } from "@/features/Categories/components/CategorySlider/CategorySlider";
import { useSuspenseQuery } from "@tanstack/react-query";

const CatalogCategories = ({
  parent,
  activeSlug,
}: {
  parent: number;
  activeSlug?: string;
}) => {
  const { data } = useSuspenseQuery(getCategoriesQueryOptions({ parent }));

  if (data.items.length)
    return <CategorySlider categories={data?.items} activeSlug={activeSlug} />;

  return null;
};

export default CatalogCategories;
