"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/shared/lib/utils";
import { Button } from "./Button";
import { IconButton } from "./IconButton";

const RadioButtonsGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioButtonsGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <IconButton asChild size="small" variant="secondary">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "px-4 focus:outline-none hover:text-white hover:shadow-elevation-1 focus-visible:ring-1 border border-main focus-visible:ring-ring data-[state=checked]:bg-none data-[state=checked]:bg-main data-[state=checked]:text-white disabled:border-gray disabled:bg-white",
          className
        )}
        {...props}
      >
        {children}
      </RadioGroupPrimitive.Item>
    </IconButton>
  );
});
RadioGroupButton.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioButtonsGroup, RadioGroupButton };
