import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/UI/Accordion";
import FilterCheckbox from "./FilterCheckbox";
import { useProductsSizes } from "../../api/filtersApi";

const SizeFilter = () => {
  const { data } = useProductsSizes();
  return (
    <AccordionItem className="flex flex-col min-h-14" value="size">
      <AccordionTrigger className="text-h5">Размер</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4">
        {data?.items
          .sort((a, b) => a.menu_order - b.menu_order)
          .map((item) => (
            <FilterCheckbox key={item.id} onCheck={() => {}} text={item.name} />
          ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SizeFilter;
