import CloseIcon from "@/components/icons/CloseIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/Accordion";
import { Button } from "@/components/UI/Button";
import { Checkbox } from "@/components/UI/Checkbox";
import { RangeSlider } from "@/components/UI/RangeSlider";
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
import { TPriceRange, useFiltersStore } from "../../store/filtersStore";
import PriceRangeFilter from "./PriceRangeFilter";
import FilterCheckbox from "./FilterCheckbox";
import SizeFilter from "./SizeFilter";

const ProductsFiltersSheet = ({ trigger }: { trigger: ReactNode }) => {
  const { priceRange, setPriceRange, clearFilters } = useFiltersStore();

  const priceRangeRef = useRef<TPriceRange | undefined>(undefined);
  const priceRangeClearRef = useRef<() => void>(() => {});

  const handleSubmit = () => {
    console.log(priceRangeRef.current);
    if (priceRangeRef.current) setPriceRange(priceRangeRef.current);
  };

  const handleClear = () => {
    if (priceRangeClearRef.current) priceRangeClearRef.current();
    clearFilters();
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
            <AccordionItem className="flex flex-col min-h-14" value="color">
              <AccordionTrigger className="text-h5">Цвет</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
                <div className="flex items-center gap-2.5">
                  <Checkbox className="w-6 h-6" />
                  <label>Белый</label>
                </div>
              </AccordionContent>
            </AccordionItem>
            <SizeFilter />
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
                <FilterCheckbox onCheck={() => {}} text="До 30%" />
                <FilterCheckbox onCheck={() => {}} text="30%-50%" />
                <FilterCheckbox onCheck={() => {}} text="50%-60%" />
                <FilterCheckbox onCheck={() => {}} text="70%" />
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
