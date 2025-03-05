import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    wrapperClassName?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }
>(
  (
    { className, wrapperClassName, type, startIcon, endIcon, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex items-center gap-[10px] px-5 w-full rounded-[2px] border border-stroke-black transition-colors hover:ring-[1px] focus-within:ring-[1px] ring-black",
          wrapperClassName
        )}
      >
        {startIcon}
        <input
          type={type}
          className={cn(
            "flex w-full py-4 rounded-md bg-transparent text-placeholder file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {endIcon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
