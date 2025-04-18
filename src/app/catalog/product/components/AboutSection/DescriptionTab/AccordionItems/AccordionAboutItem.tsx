import { ProductMeta } from "@/features/Products/types";
import CheckIcon from "@/shared/components/icons/CheckIcon";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";

const AccordionAboutItem = ({ meta }: { meta: ProductMeta }) => {
  const items = meta.find((item) => item.key === "_product_features")?.value;
  return (
    <AccordionItem value="about">
      <AccordionTrigger>Подробнее о товаре</AccordionTrigger>
      <AccordionContent className="text-gray-dark">
        <ul className="flex flex-col gap-4">
          {items?.length
            ? items?.split("\r\n").map((item) => (
                <li key={item} className="flex gap-2">
                  <div className="w-6 h-6 bg-black">
                    <CheckIcon className="fill-white" />
                  </div>
                  {item}
                </li>
              ))
            : null}
          {!items?.length && (
            <p className="text-center">Вкладка не содержит контента</p>
          )}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionAboutItem;
