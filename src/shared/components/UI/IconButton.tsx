import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/utils/cn";
import { Skeleton } from "./Skeleton";

// Добавить цвета в конфиг tailwind

const iconButtonVariantsAndSizes = {
  variants: {
    variant: {
      primary: `bg-main
        [&_svg]:fill-white
        hover:bg-gray-dark hover:primary-svg-hover
        focus-visible:bg-gray-middle focus-visible:border-1 border-stroke-black
        active:bg-[#27303E]`,

      secondary: `bg-white 
        hover:bg-main hover:primary-svg-hover hover:shadow-elevation-1
        focus-visible:border-[2px] focus-visible:bg-gray-light focus-visible:border-stroke-black
        active:bg-[#27303E]
        after:opacity-0 hover:after:opacity-100`,
    },
    size: {
      large: " min-w-[64px] h-[64px] p-2 [&_svg]:size-12",
      normal: " min-w-[56px] h-[56px] p-4",
      medium: " min-w-[48px] h-[48px] p-3",
      small: "min-w-[40px] h-[40px] p-2",
      extraSmall: "min-w-[32px] h-[32px] p-2 [&_svg]:size-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "normal",
  },
};

const iconButtonVariants = cva(
  `relative inline-flex w-max items-center justify-center rounded-xs transition-all duration-300 
  focus-visible:outline-none focus-visible:border-solid focus-visible:border-1
  disabled:pointer-events-none disabled:border-disabled  disabled:bg-button-bg-disabled disabled:text-button-text-disabled disabled:svg-disabled disabled:border-transparent disabled:transition-none
  after:absolute after:w-full after:h-full after:bg-radial-gradient after:transition-opacity
  [&_svg]:pointer-events-none [&_svg]:size-[24px] [&_svg]:shrink-0 [&_svg]:transition-colors`,

  {
    variants: iconButtonVariantsAndSizes.variants,
    defaultVariants: {
      variant: "primary",
      size: "normal",
    },
  }
);

export type TIconButonnVariant = VariantProps<
  typeof iconButtonVariants
>["variant"];
export type TIconButtonSizes = VariantProps<typeof iconButtonVariants>["size"];

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
IconButton.displayName = "IconButton";

export interface IconButtonLoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconButtonVariants> {}

const IconButtonLoader = ({
  className,
  size = "normal",
  ...props
}: IconButtonLoaderProps) => {
  return (
    <Skeleton
      className={cn(
        "duration-1000",
        className,
        iconButtonVariantsAndSizes.variants.size[size ?? "normal"]
      )}
      {...props}
    />
  );
};

IconButtonLoader.displayName = "IconButtonLoader";

export { IconButton, IconButtonLoader, iconButtonVariants };
