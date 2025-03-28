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
import { ReactNode } from "react";

const FilterCheckbox = ({
  defaultChecked,
  onCheck,
  text,
}: {
  defaultChecked?: boolean;
  onCheck: () => void;
  text: string;
}) => {
  return (
    <div className="flex items-center gap-2.5">
      <Checkbox
        defaultChecked={defaultChecked}
        onCheckedChange={onCheck}
        className="w-6 h-6"
      />
      <label>{text}</label>
    </div>
  );
};

const ProductsFiltersSheet = ({ trigger }: { trigger: ReactNode }) => {
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
            <AccordionItem className="flex flex-col min-h-14" value="size">
              <AccordionTrigger className="text-h5">Размер</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4">
                <FilterCheckbox onCheck={() => {}} text="One Size" />
                <FilterCheckbox onCheck={() => {}} text="XS" />
                <FilterCheckbox onCheck={() => {}} text="S" />
                <FilterCheckbox onCheck={() => {}} text="M" />
                <FilterCheckbox onCheck={() => {}} text="L" />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="flex flex-col min-h-14" value="price">
              <AccordionTrigger className="text-h5">Цена</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 px-2">
                <RangeSlider
                  className="my-10"
                  defaultValue={[2000]}
                  minStepsBetweenThumbs={200}
                  max={300000}
                  min={5000}
                  step={100}
                  formatLabel={(value) => `${value} \u20B8`}
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
          <Button className="w-full" variant="secondary" size="large">
            Очистить
          </Button>
          <Button className="w-full" size="large">
            Применить
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default ProductsFiltersSheet;
