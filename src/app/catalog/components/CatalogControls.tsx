"use client";

import FiltersIcon from "@/shared/components/icons/FiltersIcon";
import GridBigIcon from "@/shared/components/icons/GridBigIcon";
import GridSmallIcon from "@/shared/components/icons/GridSmallIcon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTriggerPlain,
} from "@/shared/components/UI/Select";
import ProductsFiltersSheet from "@/features/Products/components/Filters/ProductsFiltersSheet";
import { TSort, useCatalogStore } from "@/features/Products/store/catalogStore";
import { usePaginationStore } from "@/features/Products/store/paginationStore";

const CatalogSelect = ({
  sort,
  onChange,
}: {
  sort: TSort;
  onChange: (value: string) => void;
}) => {
  const defaultValue = `${sort.type}:${sort.field}`;
  return (
    <Select defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTriggerPlain className="text-button-xs">
        Сортировать по
      </SelectTriggerPlain>
      <SelectContent align="end">
        <SelectItem value="desc:date">Сначала новинки</SelectItem>
        <SelectItem value="desc:price">По убыванию цены</SelectItem>
        <SelectItem value="asc:price">По возрастанию цены</SelectItem>
        <SelectItem value="desc:sale">Размер скидки: по убыванию</SelectItem>
        <SelectItem value="desc:popularity">По популярности</SelectItem>
      </SelectContent>
    </Select>
  );
};

const CatalogControls = () => {
  const { sort, setGridType, setSort } = useCatalogStore();
  const { setPerPage } = usePaginationStore();

  const handleGridChange = (type: "big" | "small") => {
    if (type === "small") {
      setGridType("small");
      setPerPage(8);
    } else {
      setGridType("big");
      setPerPage(4);
    }
  };

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
        <CatalogSelect
          sort={sort}
          onChange={(value) =>
            setSort({ type: value.split(":")[0], field: value.split(":")[1] })
          }
        />
      </div>
      <div className="flex items-center gap-2">
        <GridSmallIcon
          className="cursor-pointer [&_*]:cursor-pointer hover:fill-main hover:stroke-transparent"
          onClick={() => handleGridChange("small")}
        />
        <GridBigIcon
          className="cursor-pointer [&_*]:cursor-pointer h-[19px]  w-[19px] hover:fill-main hover:stroke-transparent"
          onClick={() => handleGridChange("big")}
        />
      </div>
    </div>
  );
};

export default CatalogControls;
