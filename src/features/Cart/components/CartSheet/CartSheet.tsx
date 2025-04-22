import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/components/UI/Sheet";
import { ReactNode } from "react";
import CartSheetEmpty from "./CartSheetEmpty";
import CartSheetContent from "./CartSheetContent";

const CartSheet = ({ children }: { children: ReactNode }) => {
  const hasItems = true;
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent
        className="w-full h-full z-over-header max-w-[680px] p-10 pt-14"
        overlayClassName="z-over-header"
      >
        <SheetHeader className="flex flex-col gap-4 mb-4">
          <SheetTitle>Корзина</SheetTitle>
          <SheetDescription>В вашей корзине 5 товаров</SheetDescription>
          <SheetClose className="top-6 right-10" />
        </SheetHeader>

        {hasItems ? <CartSheetContent /> : <CartSheetEmpty />}
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
