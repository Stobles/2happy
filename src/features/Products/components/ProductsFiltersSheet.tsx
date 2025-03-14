import CloseIcon from "@/components/icons/CloseIcon";
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
import { ReactNode } from "react";

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
        <div className="h-full"></div>
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
