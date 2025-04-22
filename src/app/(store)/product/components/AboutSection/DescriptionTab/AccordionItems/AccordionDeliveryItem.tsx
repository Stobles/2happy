import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import Link from "next/link";

const AccordionDeliveryItem = () => {
  return (
    <AccordionItem value="delivery">
      <AccordionTrigger>Доставка и возврат</AccordionTrigger>
      <AccordionContent>
        <ul className="text-body2 text-gray-dark list-disc pl-5">
          <li>
            Отправка в течение 1–2 рабочих дней с момента подтверждения
            заказа. Более подробную информацию см. в разделе 
            <Link href="/" className="underline">
              «Доставка»
            </Link>
            .
          </li>
          <li>
            Для получения более подробной информации ознакомьтесь с <br />
            нашей 
            <Link href="/" className="underline">
              политикой возврата
            </Link>
            .
          </li>
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionDeliveryItem;
