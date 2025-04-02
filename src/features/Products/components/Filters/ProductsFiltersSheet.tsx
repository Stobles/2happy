import CloseIcon from "@/components/icons/CloseIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/Accordion";
import { Button } from "@/components/UI/Button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/Sheet";
import { ReactNode, useRef } from "react";
import PriceRangeFilter from "./PriceRangeFilter";
import FilterCheckbox from "./FilterCheckbox";
import CheckboxListFilter from "./CheckboxListFilter";
import {
  TCheckboxFilterItem,
  TPriceRange,
  useFiltersStore,
} from "../../store/filtersStore";
import { useProductsColors, useProductsSizes } from "../../api/filtersApi";

const ProductsFiltersSheet = ({ trigger }: { trigger: ReactNode }) => {
  const {
    priceRange,
    colors,
    sizes,
    setSizes,
    setColors,
    setPriceRange,
    clearFilters,
  } = useFiltersStore();
  const { data: sizesData } = useProductsSizes();

  const sizesValue =
    sizesData?.items.map((item) => ({
      id: item.id,
      name: item.name,
    })) ?? [];

  const sizesRef = useRef<TCheckboxFilterItem[]>([]);
  const sizesClearRef = useRef<() => void>(() => {});

  const { data: colorsData } = useProductsColors();
  const colorsValue =
    colorsData?.items.map((item) => ({
      id: item.id,
      name: item.name,
    })) ?? [];

  const colorsRef = useRef<TCheckboxFilterItem[]>([]);
  const colorsClearRef = useRef<() => void>(() => {});

  const priceRangeRef = useRef<TPriceRange | undefined>(undefined);
  const priceRangeClearRef = useRef<() => void>(() => {});

  const handleSubmit = () => {
    if (priceRangeRef.current) setPriceRange(priceRangeRef.current);
    if (colorsRef.current) {
      setColors(colorsRef.current);
    }
    if (sizesRef.current) setSizes(sizesRef.current);
  };

  const handleClear = () => {
    sizesClearRef.current();
    colorsClearRef.current();
    priceRangeClearRef.current();

    clearFilters();

    priceRangeRef.current = undefined;
  };
  return (
    <Sheet>
      <SheetTrigger>{trigger}</SheetTrigger>
      <SheetContent
        side="left"
        className="w-full flex flex-col px-6 py-10 max-w-[496px] z-over-header"
        overlayClassName="z-over-header"
      >
        <SheetHeader>
          <SheetTitle>Все фильтры</SheetTitle>
          <SheetDescription className="hidden">
            Список всех фильтров для товаров
          </SheetDescription>
          <SheetClose className="absolute right-6 top-[44px] mt-0">
            <CloseIcon />
          </SheetClose>
        </SheetHeader>
        <div className="h-full overflow-x-hidden overflow-y-auto">
          <Accordion type="multiple" className="w-full flex flex-col">
            <CheckboxListFilter
              name="Цвет"
              filterRef={colorsRef}
              defaultValue={colors}
              values={colorsValue}
              clearRef={colorsClearRef}
            />
            <CheckboxListFilter
              name="Размер"
              filterRef={sizesRef}
              defaultValue={sizes}
              values={sizesValue}
              clearRef={sizesClearRef}
            />
            <AccordionItem className="flex flex-col min-h-14" value="price">
              <AccordionTrigger className="text-h5">Цена</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 px-2">
                <PriceRangeFilter
                  defaultValues={priceRange}
                  onValueCommit={(value) =>
                    (priceRangeRef.current = {
                      min: Math.min(...value),
                      max: Math.max(...value),
                    })
                  }
                  clearRef={priceRangeClearRef}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="flex flex-col min-h-14" value="discount">
              <AccordionTrigger className="text-h5 text-red">
                Распродажа
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <FilterCheckbox onCheckedChange={() => {}} text="До 30%" />
                <FilterCheckbox onCheckedChange={() => {}} text="30%-50%" />
                <FilterCheckbox onCheckedChange={() => {}} text="50%-60%" />
                <FilterCheckbox onCheckedChange={() => {}} text="70%" />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <SheetFooter className="flex">
          <Button
            className="w-full"
            variant="secondary"
            size="large"
            onClick={handleClear}
          >
            Очистить
          </Button>
          <Button className="w-full" size="large" onClick={handleSubmit}>
            Применить
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProductsFiltersSheet;
