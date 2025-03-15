import React, { useState } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

interface RangeSliderProps extends SliderPrimitive.SliderProps {
  className?: string;
  min: number;
  max: number;
  minStepsBetweenThumbs: number;
  step: number;
  formatLabel?: (value: number) => string;
  onValueChange?: (values: number[]) => void;
}

const RangeSlider = React.forwardRef(
  (
    {
      className,
      min,
      max,
      step,
      formatLabel,
      defaultValue,
      onValueChange,
      ...props
    }: RangeSliderProps,
    ref
  ) => {
    const initialValue = Array.isArray(defaultValue)
      ? defaultValue
      : [min, max];
    const [localValues, setLocalValues] = useState(initialValue);

    console.log();

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref as React.RefObject<HTMLDivElement>}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none select-none mb-6 items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-0.5 w-full grow overflow-hidden rounded-full bg-disabled">
          <SliderPrimitive.Range className="absolute h-full bg-main" />
        </SliderPrimitive.Track>
        <span className="absolute left-0 top-3 text-description">{min}</span>
        {localValues.map((value, index) => {
          const isMin = Math.min(...localValues) === value;
          const isMax = Math.max(...localValues) === value;
          return (
            <React.Fragment key={index}>
              <div
                className="absolute text-center"
                style={{
                  right: isMax && !isMin ? "0" : "auto",
                  left: isMin ? "0" : "auto",
                  top: `-35px`,
                }}
              >
                <span className="text-body2">
                  {formatLabel ? formatLabel(value) : value}
                </span>
              </div>
              <SliderPrimitive.Thumb className="block h-[18px] w-[18px] rounded-full border-[5px] border-white bg-main shadow-elevation-3 transition-all hover:w-[21px] hover:h-[21px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:bg-gray active:w-[18px] active:h-[18px] disabled:pointer-events-none disabled:opacity-50" />
            </React.Fragment>
          );
        })}
        <span className="absolute right-0 top-3 text-description">{max}</span>
      </SliderPrimitive.Root>
    );
  }
);

RangeSlider.displayName = SliderPrimitive.Root.displayName;

export { RangeSlider };
