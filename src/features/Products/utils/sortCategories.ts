import { ProductCategory } from "@/shared/types/api";

export const sortCategories = (categories: ProductCategory[] | undefined) => {
  if (!categories) return [];

  return categories.sort((a, b) => a.parent - b.parent);
};
