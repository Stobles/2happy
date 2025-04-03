import * as React from "react";

import { cn } from "@/shared/lib/utils";
import ArrowRightIcon from "../icons/Arrows/ArrowRightIcon";

const Pagination = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    role="navigation"
    aria-label="pagination"
    className={cn("flex justify-center items-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("flex items-center", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationButtonProps = {
  isActive?: boolean;
} & React.ComponentProps<"button">;

const PaginationButton = ({
  className,
  isActive,
  ...props
}: PaginationButtonProps) => (
  <button
    className={cn(
      "w-6 h-6 rounded-xs transition-colors hover:bg-gray-light hover:text-main",
      isActive ? "bg-main text-white" : "",
      className
    )}
    {...props}
  />
);
PaginationButton.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to previous page"
    className={cn("mr-6", className)}
    disabled={disabled}
    {...props}
  >
    <ArrowRightIcon
      className={`rotate-180 ${disabled && "fill-dark-disabled"}`}
    />
  </PaginationButton>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to next page"
    className={cn("gap-1 ml-6", className)}
    disabled={disabled}
    {...props}
  >
    <ArrowRightIcon className={`${disabled && "fill-dark-disabled"}`} />
  </PaginationButton>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div aria-hidden className={cn("w-6 h-6 text-center", className)} {...props}>
    <span>...</span>
    <span className="sr-only">More pages</span>
  </div>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationButton,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
