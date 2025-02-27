"use client";

import ChevronIcon from "@/components/icons/Chevron";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/UI/Sheet";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import { useDelayedState } from "@/hooks/useDelayedState";

const CategorySheet = () => {
  const { state, setFastState, setDelayedState, clearTimer } =
    useDelayedState(false);

  return (
    <Sheet open={state} onOpenChange={() => {}}>
      <StyledLink
        onMouseEnter={() => setFastState(true)}
        onMouseLeave={() => setDelayedState(false, 300)}
        className={`text-button-normal ${state ? "link-hover" : ""}`}
        href="/"
      >
        Каталог
        <ChevronIcon
          className={`group-hover/link:stroke-whiteSecondary group-hover/link:rotate-180 ${
            state && "stroke-whiteSecondary rotate-180"
          } transition-transform`}
        />
      </StyledLink>
      <SheetContent
        className="mt-[138px]"
        onMouseEnter={() => clearTimer()}
        onMouseLeave={() => setDelayedState(false, 300)}
        side="top"
      >
        <SheetHeader className="hidden">
          <SheetTitle>Каталог</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CategorySheet;
