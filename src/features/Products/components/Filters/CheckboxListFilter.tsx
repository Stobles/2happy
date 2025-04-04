import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import FilterCheckbox from "./FilterCheckbox";
import { RefObject, useEffect, useState } from "react";
import { TCheckboxFilterItem } from "../../store/filtersStore";

const CheckboxListFilter = ({
  name,
  values,
  defaultValue,
  filterRef,
  clearRef,
}: {
  name: string;
  filterRef: RefObject<TCheckboxFilterItem[]>;
  clearRef: RefObject<() => void>;
  values: TCheckboxFilterItem[];
  defaultValue?: TCheckboxFilterItem[];
}) => {
  const [checkedValues, setCheckedValues] = useState(defaultValue ?? []);

  useEffect(() => {
    if (clearRef)
      clearRef.current = () => {
        filterRef.current = [];
        setCheckedValues([]);
      };
  }, []);
  return (
    <AccordionItem className="flex flex-col min-h-14" value={name}>
      <AccordionTrigger className="text-h5">{name}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        {values.map((filter) => (
          <FilterCheckbox
            key={filter.id}
            checked={!!checkedValues.find((item) => filter.id === item.id)}
            onCheckedChange={(checked) => {
              if (checked) {
                filterRef.current?.push(filter);
                setCheckedValues((prev) => [...prev, filter]);
              } else {
                filterRef.current = filterRef.current?.filter(
                  (item) => item.id != filter.id
                );
                setCheckedValues((prev) =>
                  prev.filter((item) => item.id != filter.id)
                );
              }
            }}
            text={filter.name}
          />
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default CheckboxListFilter;
