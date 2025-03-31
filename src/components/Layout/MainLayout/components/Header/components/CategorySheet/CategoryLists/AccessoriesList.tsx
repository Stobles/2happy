import { useSuspenseQuery } from "@tanstack/react-query";
import CategoriesCollapsibleList from "../CategoriesCollapsibleList";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categorySlugs } from "@/features/Categories/consts/consts";

const AccessoriesList = () => {
  const { data } = useSuspenseQuery(
    getCategoriesQueryOptions({
      parent: categorySlugs["accessories"],
      per_page: 20,
    })
  );
  return <CategoriesCollapsibleList categories={data.items} showCount={3} />;
};

export default AccessoriesList;
