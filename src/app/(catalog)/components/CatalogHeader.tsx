import FiltersIcon from "@/components/icons/FiltersIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
} from "@/components/UI/Select";
import ProductsFiltersSheet from "@/features/Products/components/ProductsFiltersSheet";

const CatalogSelect = () => {
  return (
    <Select defaultValue="default">
      <SelectTriggerPlain className="text-button-xs">
        Сортировать по
      </SelectTriggerPlain>
      <SelectContent align="end">
        <SelectItem value="default">По умолчанию</SelectItem>
        <SelectItem value="new">Сначала новинки</SelectItem>
        <SelectItem value="desc">По убыванию цены</SelectItem>
        <SelectItem value="asc">По возрастанию цены</SelectItem>
        <SelectItem value="sale:desc">Размер скидки: по убыванию</SelectItem>
        <SelectItem value="popularity">По популярности</SelectItem>
      </SelectContent>
    </Select>
  );
};

const CatalogHeader = () => {
  return (
    <div className="flex gap-4">
      <ProductsFiltersSheet
        trigger={
          <div className="text-button-xs link-hover">
            <FiltersIcon className="h-6 w-6" />
            <span>Показать фильтры</span>
          </div>
        }
      />
      <CatalogSelect />
    </div>
  );
};

export default CatalogHeader;
