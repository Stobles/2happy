"use client";

import ChevronIcon from "@/components/icons/Chevron";
import { Sheet } from "@/components/UI/Sheet";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import { useDelayedState } from "@/hooks/useDelayedState";
import CategorySheetContent from "./CategorySheetContent";

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
      <StyledLink
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`text-button-normal ${state ? "link-hover" : ""}`}
        href="/"
      >
        Каталог
        <ChevronIcon
          className={`group-hover/link:stroke-whiteSecondary group-hover/link:rotate-180 ${
            state && "stroke-whiteSecondary rotate-180"
          } transition-[fill,transform]`}
        />
      </StyledLink>
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
