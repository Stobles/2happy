import { cn } from "@/shared/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const chipVariants = cva(`flex rounded-xs text-white`, {
  variants: {
    variant: {
      red: "bg-red",
      pink: "text-red bg-status-muted-error",
      yellow: "bg-yellow",
      grey: "bg-gray",
      green: "bg-green",
      black: "bg-main",
    },
    size: {
      normal: "text-button-small p-2",
      medium: "text-button-xs py-1.5 px-3",
      small: "text-button-xs py-1 px-2",
    },
  },
  defaultVariants: {
    variant: "grey",
    size: "normal",
  },
});

export type ChipVariant = NonNullable<
  VariantProps<typeof chipVariants>["variant"]
>;
export type ChipSize = NonNullable<VariantProps<typeof chipVariants>["size"]>;

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {}

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <span
        className={cn(chipVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
