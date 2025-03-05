"use client";

import { Sheet } from "@/components/UI/Sheet";
import { useDelayedState } from "@/hooks/useDelayedState";
import CategorySheetContent from "./CategorySheetContent";
import Link from "next/link";
import ChevronDownIcon from "@/components/icons/Chevron/ChevronDownIcon";

const CategorySheet = () => {
  const { state, setFastState, setDelayedState, clearTimer } =
    useDelayedState(false);

  const onMouseEnter = () => {
    setFastState(true);
  };

  const onMouseLeave = () => {
    setDelayedState(false, 300);
  };

  return (
    <Sheet open={state}>
      <Link
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`text-button-normal link-hover ${
          state ? "link-hovered" : ""
        }`}
        href="/"
      >
        Каталог
        <ChevronDownIcon
          className={`group-hover/link:rotate-180 ${
            state && "fill-lightGrey rotate-180"
          } transition-[stroke,transform]`}
        />
      </Link>
      <CategorySheetContent
        style={{
          marginTop: `calc(var(--header-height) - 2px)`,
          maxHeight: `calc(100vh - var(--header-height))`,
        }}
        onMouseEnter={() => clearTimer()}
        onMouseLeave={onMouseLeave}
        side="top"
      />
    </Sheet>
  );
};

export default CategorySheet;
