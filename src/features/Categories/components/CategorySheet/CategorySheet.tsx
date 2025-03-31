"use client";

import { Sheet, SheetTrigger } from "@/components/UI/Sheet";
import { useDelayedState } from "@/hooks/useDelayedState";
import CategorySheetContent from "./CategorySheetContent";
import ChevronDownIcon from "@/components/icons/Chevron/ChevronDownIcon";

const CategorySheet = ({ isSticky }: { isSticky: boolean }) => {
  const { state, setFastState, setDelayedState, clearTimer } =
    useDelayedState(false);

  const onMouseEnter = () => {
    setFastState(true);
  };

  const onMouseLeave = () => {
    setDelayedState(false, 300);
  };

  const marginTop = isSticky
    ? `calc(var(--sticky-header-height) - 2px)`
    : `calc(var(--full-header-height) - 2px)`;

  const maxHeight = isSticky
    ? `calc(100vh - var(--sticky-header-height) + 2px)`
    : `calc(100vh - var(--full-header-height) + 2px)`;

  return (
    <Sheet open={state}>
      <SheetTrigger
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`text-button-normal link-hover outline-none ${
          state ? "link-hovered" : ""
        }`}
      >
        Каталог
        <ChevronDownIcon
          className={`group-hover/link:rotate-180 ${
            state && "fill-gray rotate-180"
          } transition-[stroke,transform]`}
        />
      </SheetTrigger>
      <CategorySheetContent
        style={{
          marginTop,
          maxHeight,
        }}
        closeSheet={() => setFastState(false)}
        onMouseEnter={() => clearTimer()}
        onMouseLeave={onMouseLeave}
        side="top"
      />
    </Sheet>
  );
};

export default CategorySheet;
