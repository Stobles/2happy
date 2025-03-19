import FiltersIcon from "@/components/icons/FiltersIcon";
import GridBigIcon from "@/components/icons/GridBigIcon";
import GridSmallIcon from "@/components/icons/GridSmallIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
} from "@/components/UI/Select";
import ProductsFiltersSheet from "@/features/Products/components/Dialogs/ProductsFiltersSheet";
import { TProductGrid } from "@/features/Products/types";

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

const CatalogHeader = ({
  onGridChange,
}: {
  onGridChange: (value: TProductGrid) => void;
}) => {
  return (
    <div className="flex items-center justify-between gap-2">
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
      <div className="flex items-center gap-2">
        <GridSmallIcon
          className="cursor-pointer [&_*]:cursor-pointer hover:fill-main hover:stroke-transparent"
          onClick={() => onGridChange("small")}
        />
        <GridBigIcon
          className="cursor-pointer [&_*]:cursor-pointer h-[19px]  w-[19px] hover:fill-main hover:stroke-transparent"
          onClick={() => onGridChange("big")}
        />
      </div>
    </div>
  );
};

export default CatalogHeader;
