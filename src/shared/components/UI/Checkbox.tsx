"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/shared/utils/cn";
import CheckIcon from "../icons/CheckIcon";

export type TCheckboxProps = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
>;

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  TCheckboxProps
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group/checkbox relative peer h-4 w-4 shrink-0 border border-gray-middle shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:hover:bg-button-primary-bg-hover data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className
    )}
    {...props}
  >
    <div className="absolute w-full h-full bg-radial-gradient opacity-0 transition-opacity z-10 group/checkbox-hover:opacity-100" />
    <CheckboxPrimitive.Indicator
      className={cn(
        "relative top-[-1px] flex items-center justify-center text-current"
      )}
    >
      <CheckIcon className="w-full h-full min-w-4 min-h-4 flex-shrink-0 fill-white" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
