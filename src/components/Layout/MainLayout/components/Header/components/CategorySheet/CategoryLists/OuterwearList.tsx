import { useSuspenseQuery } from "@tanstack/react-query";
import CategoriesCollapsibleList from "../CategoriesCollapsibleList";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categorySlugs } from "@/features/Categories/consts/consts";

const OuterwearList = () => {
  const { data } = useSuspenseQuery(
    getCategoriesQueryOptions({
      parent: categorySlugs["outerwear"],
      per_page: 20,
    })
  );
  return <CategoriesCollapsibleList categories={data.items} showCount={10} />;
};

export default OuterwearList;
