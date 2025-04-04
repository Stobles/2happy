"use client";

import { Sheet, SheetTrigger } from "@/shared/components/UI/Sheet";
import { useDelayedState } from "@/shared/hooks/useDelayedState";
import CategorySheetContent from "./CategorySheetContent";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import CategorySheetTrigger from "./CategorySheetTrigger";

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
      <CategorySheetTrigger
        isHovered={state}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />

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
