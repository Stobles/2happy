import { Accordion } from "@/shared/components/UI/Accordion";
import OrderCard from "./OrderCard";

const OrdersList = () => {
  return (
    <Accordion type="multiple">
      <OrderCard />
    </Accordion>
  );
};

export default OrdersList;
