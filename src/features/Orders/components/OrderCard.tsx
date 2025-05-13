import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { useId } from "react";

const OrderCard = () => {
  const id = useId();
  return (
    <article>
      <AccordionItem className="border border-gray px-6" value={`order_${id}`}>
        <AccordionTrigger className="py-4 text-body2">
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col gap-2">
              <span>Заказ</span>
              <span>Заказ</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Заказ</span>
              <span>Заказ</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Заказ</span>
              <span>Заказ</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-14 pb-8">
          <div>dfs</div>
          <div>sdf</div>
        </AccordionContent>
      </AccordionItem>
    </article>
  );
};

export default OrderCard;
