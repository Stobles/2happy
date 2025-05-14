import InfoBoldIcon from "@/shared/components/icons/InfoBoldIcon";
import InfoIcon from "@/shared/components/icons/InfoIcon";
import WhatsAppBoldIcon from "@/shared/components/icons/Social/WhatsAppBoldIcon";
import WhatsAppIcon from "@/shared/components/icons/Social/WhatsAppIcon";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/UI/Accordion";
import { Button } from "@/shared/components/UI/Button";
import { Separator } from "@/shared/components/UI/Separator";
import Link from "next/link";
import { useId } from "react";
import OrderProductCard from "./OrderProductCard";

const OrderCard = () => {
  const id = useId();
  return (
    <article>
      <AccordionItem className="border border-gray px-6" value={`order_${id}`}>
        <AccordionTrigger className="py-4 text-body2">
          <div className="w-full grid grid-cols-3">
            <div className="flex flex-col gap-2">
              <span>Дата заказа</span>
              <span className="text-gray-middle">10.04.2025</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Номер заказа</span>
              <span className="text-gray-middle">773757</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Сумма заказа</span>
              <span className="text-gray-middle">213 000 ₸</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="space-y-14 pb-8">
          <div>
            <OrderProductCard />
            <OrderProductCard />
          </div>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-14 max-w-[488px] w-full">
              <div className="w-full flex flex-col gap-6">
                <Button className="w-full">Повторить заказ</Button>
                <Button className="w-full" variant="secondary">
                  Оформить возврат
                </Button>
              </div>
              <div className="flex gap-2 p-4 bg-order-card-help text-description">
                <InfoBoldIcon className="shrink-0" />
                <div className="flex flex-col gap-6">
                  <div className="flex gap-2">
                    <p className="text-gray-dark">
                      Оформить возврат можно в течение 14 дней с момента
                      получения заказа. Подробнее об условиях — в разделе{" "}
                      <Link className="text-main" href="/">
                        Условия возвррата / обмена.
                      </Link>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-dark">
                      Возникли вопросы по заказу? Свяжитесь с нами
                    </span>
                    <div className="flex items-center gap-2">
                      <WhatsAppBoldIcon className="text-main" />
                      <span className="text-button-xs"> +7 777 555 77 77</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-[272px] border border-gray">
                <h5 className="text-h5 pt-6 px-6 pb-4">Способ оплаты</h5>
                <Separator className="w-full" />
                <div className="flex flex-col p-6">
                  <span>КАРТА VISA (**** 8855)</span>
                  <div className="flex justify-between border-b border-gray py-4 text-gray-dark">
                    <span>Товары:</span>
                    <span>213 000 ₸</span>
                  </div>
                  <div className="flex justify-between border-b border-gray py-4 text-gray-dark">
                    <span>Скидка:</span>
                    <span>213 000 ₸</span>
                  </div>
                  <div className="flex justify-between text-h5 pt-6">
                    <span>Итого:</span>
                    <span>213 000₸</span>
                  </div>
                </div>
              </div>

              <div className="w-[272px] border border-gray">
                <h5 className="text-h5 pt-6 px-6 pb-4">Адрес доставки</h5>
                <Separator className="w-full" />
                <div className="flex flex-col gap-4 p-6">
                  <span className="text-body1">Голикова Инесса</span>
                  <div className="flex flex-col gap-2 text-gray-dark text-body2">
                    <span>ул. Попова, д. 78 / 150000</span>
                    <span>Казахстан, СКО</span>
                    <span>г. Петропавловск</span>
                    <span>+7-777-77-77</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </article>
  );
};

export default OrderCard;
