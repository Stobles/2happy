"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/lib/utils";
import ColorSquare from "@/features/Products/components/ColorSquare";

const RadioColorsGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
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
        "border border-transparent p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring data-[state=checked]:border-gray-middle disabled:bg-white",
        className
      )}
      {...props}
    >
      <ColorSquare color={color} />
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupColor.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioColorsGroup, RadioGroupColor };
