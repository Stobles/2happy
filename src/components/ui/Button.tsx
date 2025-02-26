import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap uppercase rounded-[2px]  text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:border-solid focus-visible:border-2 focus-visible:border-stroke-black disabled:pointer-events-none disabled:bg-button-bg-disabled disabled:text-button-text-disabled [&_svg]:pointer-events-none [&_svg]:size-[16px] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "text-button-primary-text bg-button-primary-bg hover:bg-button-primary-bg-hover focus-visible:bg-button-primary-bg-focused",
        secondary:
          "text-button-secondary-text border-[1px] border-stroke-black hover:bg-button-secondary-bg-hover hover:text-button-secondary-text-hover hover:border-stroke-grey focus-visible:bg-button-secondary-bg-focused active:border-[1px] active:bg-button-secondary-bg-active",
        tertiary:
          "text-button-tertiary-text bg-button-tertiary-bg hover:bg-button-tertiary-bg-hover hover:text-button-tertiary-text-hover focus-visible:border-2 focus-visible:border-stroke-black focus-visible:text-button-tertiary-text-focused focus-visible:bg-button-tertiary-bg-focused active:border-0 active:bg-button-tertiary-bg-active",
      },
      size: {
        large:
          "h-[64px] px-[32px] py-[20px] text-[20px]/[24px] [&_svg]:size-[24px]",
        default: "h-[56px] px-[32px] py-[16px] text-[16px]/[24px]",
        medium: "h-[48px] px-[32px] py-[14px] text-[16px]/[20px]",
        small: "h-[40px] px-[24px] py-[12px] text-[14px]/[16px]",
        extraSmall:
          "h-[32px] px-[24px] py-[8px] text-[20px]/[24px] normal-case",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
