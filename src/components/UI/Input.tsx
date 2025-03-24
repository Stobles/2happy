import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & {
    wrapperClassName?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    hasError?: boolean;
  }
>(
  (
    {
      className,
      wrapperClassName,
      type,
      startIcon,
      endIcon,
      hasError = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex items-center gap-[10px] px-5 w-full rounded-xs border border-stroke-black transition-colors hover:ring-[1px] focus-within:ring-[1px] ring-black [&_svg]:shrink-0 [&_svg]:size-6",
          hasError && "border-red bg-status-muted-error ring-red",
          wrapperClassName
        )}
      >
        {startIcon}
        <input
          type={type}
          className={cn(
            "flex w-full py-4 rounded-md bg-transparent text-placeholder autofill:shadow-[inset_0_0_1000px] autofill:shadow-status-muted-warning file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            hasError && "autofill:shadow-status-muted-error",
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
