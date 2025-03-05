import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const chipVariants = cva(`flex rounded-[2px] !text-white`, {
  variants: {
    variant: {
      red: "bg-red",
      yellow: "bg-yellow",
      grey: "bg-lightGrey",
      green: "bg-green",
      black: "bg-main",
    },
    size: {
      normal: "text-button-small p-2",
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
    VariantProps<typeof chipVariants> {
  text: string;
}

const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  ({ className, variant, size, text, ...props }, ref) => {
    return (
      <span
        className={cn(chipVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {text}
      </span>
    );
  }
);
Chip.displayName = "Chip";

export { Chip, chipVariants };
