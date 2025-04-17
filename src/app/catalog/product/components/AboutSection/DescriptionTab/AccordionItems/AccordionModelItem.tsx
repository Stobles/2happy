import { ProductMeta } from "@/features/Products/types";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";

const AccordionModelItem = ({ meta }: { meta: ProductMeta }) => {
  const item = meta.find((item) => item.key === "_model_parameters")?.value;
  return (
    <AccordionItem value="model">
      <AccordionTrigger>Параметры модели</AccordionTrigger>
      <AccordionContent className="text-gray-dark whitespace-break-spaces">
        {item}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionModelItem;
