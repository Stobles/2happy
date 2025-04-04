import Catalog from "../components/Catalog";
import FiltersList from "@/features/Products/components/Filters/FiltersList";
import MainCategories from "./components/MainCategories";

const CatalogPage = () => {
  return (
    <div className="flex flex-col gap-12">
      <MainCategories />
      <Catalog filtersListSlot={<FiltersList />} />
    </div>
  );
};

export default CatalogPage;
