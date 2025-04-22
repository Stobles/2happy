import FiltersList from "@/features/Products/components/Filters/FiltersList";
import Catalog from "../../../(store)/components/Catalog";
import { tagIds } from "@/features/Categories/consts/consts";

const BestsellersPage = () => {
  return (
    <Catalog tag={tagIds["bestsellers"]} filtersListSlot={<FiltersList />} />
  );
};

export default BestsellersPage;
