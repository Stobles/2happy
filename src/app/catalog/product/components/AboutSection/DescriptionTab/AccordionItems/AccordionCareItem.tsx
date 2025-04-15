import { ProductMeta } from "@/features/Products/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";

const AccordionCareItem = ({ meta }: { meta: ProductMeta }) => {
  const item = meta.find((item) => item.key === "_composition_and_care")?.value;
  return (
    <AccordionItem value="care">
      <AccordionTrigger>Состав и уход</AccordionTrigger>
      <AccordionContent className="text-gray-dark whitespace-break-spaces">
        {item}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionCareItem;
