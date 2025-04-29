"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/shared/utils/cn";
import ColorSquare from "@/features/Products/components/Colors/ColorSquare";

const RadioColorsGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, disabled, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2 ", disabled && "blur-xs", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioColorsGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupColor = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    color: string;
  }
>(({ className, color, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "border border-transparent p-1 disabled:cursor-default focus:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[state=checked]:border-gray-middle disabled:bg-white",
        className
      )}
      {...props}
    >
      <ColorSquare className="border border-main" color={color} />
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupColor.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioColorsGroup, RadioGroupColor };
