import { useSuspenseQuery } from "@tanstack/react-query";
import CategoriesCollapsibleList from "./CategoriesCollapsibleList";
import { getCategoriesQueryOptions } from "@/features/Categories/api/categoriesApi";
import { categoryIds } from "@/features/Categories/consts/consts";

const OuterwearList = ({ closeSheet }: { closeSheet: () => void }) => {
  const { data } = useSuspenseQuery(
    getCategoriesQueryOptions({
      parent: categoryIds["outerwear"],
      per_page: 20,
    })
  );
  return (
    <CategoriesCollapsibleList
      categories={data.items}
      showCount={10}
      closeSheet={closeSheet}
    />
  );
};

export default OuterwearList;
