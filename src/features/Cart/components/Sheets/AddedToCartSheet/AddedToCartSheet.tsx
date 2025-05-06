import Link from "next/link";
import { ReactNode } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  TSheetProps,
} from "@/shared/components/UI/Sheet";
import CartInfoCard from "../../Cards/CartInfoCard";
import { Button } from "@/shared/components/UI/Button";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Separator } from "@/shared/components/UI/Separator";
import { CartItemResponse } from "@/features/Cart/types";
import { paths } from "@/config/paths";
import ProductServerCard from "@/features/Products/components/ProductCards/ProductServerCard";

const AddedToCartSheet = ({
  cartItem,
  renderRelatedProducts,
  ...sheetProps
}: {
  cartItem: CartItemResponse;
  renderRelatedProducts: () => ReactNode;
} & TSheetProps) => {
  return (
    <Sheet {...sheetProps}>
      <SheetContent
        className="flex flex-col items gap-12 w-full max-w-[680px] p-10 pt-16 z-over-header overflow-y-scroll"
        overlayClassName="z-over-header"
      >
        <SheetHeader>
          <SheetTitle className="text-h3">Товар добавлен в корзину</SheetTitle>
          <SheetClose className="top-10 right-10" />
        </SheetHeader>
        <div>
          <CartInfoCard cartItem={cartItem} />
        </div>
        <Button variant="secondary" size="large" className="w-full" asChild>
          <Link href={paths.cart.getHref()}>
            Перейти в корзину <ArrowUpRightIcon />
          </Link>
        </Button>
        <Separator />
        <div className="flex flex-col gap-12">
          <h3 className="text-h3">Похожие товары /</h3>

          {renderRelatedProducts()}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddedToCartSheet;
