import { useSuspenseQuery } from "@tanstack/react-query";
import CategoriesCollapsibleList from "../CategoriesCollapsibleList";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categorySlugs } from "@/features/Categories/consts/consts";

const ClothesList = () => {
  const { data } = useSuspenseQuery(
    getCategoriesQueryOptions({
      parent: categorySlugs["clothes"],
      per_page: 20,
    })
  );
  return <CategoriesCollapsibleList categories={data.items} showCount={6} />;
};

export default ClothesList;
