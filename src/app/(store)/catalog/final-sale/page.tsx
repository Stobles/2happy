import FiltersList from "@/features/Products/components/Filters/FiltersList";
import Catalog from "../../../(store)/components/Catalog";
import { tagIds } from "@/features/Categories/consts/consts";

const FinalSalePage = () => {
  return (
    <Catalog tag={tagIds["final_sale"]} filtersListSlot={<FiltersList />} />
  );
};

export default FinalSalePage;
