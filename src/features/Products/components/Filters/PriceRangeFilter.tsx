import { RangeSlider } from "@/shared/components/UI/RangeSlider";
import { RefObject } from "react";
import { TPriceRange } from "../../store/filtersStore";

const PriceRangeFilter = ({
  defaultValues,
  onValueCommit,
  clearRef,
}: {
  defaultValues: TPriceRange | undefined;
  onValueCommit: (value: number[]) => void;
  clearRef: RefObject<() => void>;
}) => {
  const defaultValue = defaultValues
    ? [defaultValues.min, defaultValues.max]
    : undefined;
  return (
    <RangeSlider
      className="my-10"
      defaultValue={defaultValue}
      minStepsBetweenThumbs={200}
      max={300000}
      min={5000}
      onValueCommit={onValueCommit}
      step={100}
      formatLabel={(value) => `${value} \u20B8`}
      clearRef={clearRef}
    />
  );
};

export default PriceRangeFilter;
