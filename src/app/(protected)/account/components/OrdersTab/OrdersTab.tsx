import OrdersList from "@/features/Orders/components/OrdersList";
import Container from "@/shared/components/UI/Container";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/UI/Tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const OrdersTab = () => {
  return (
    <Container className="mb-section">
      <Tabs className="w-full space-y-6" defaultValue="orders">
        <TabsList>
          <TabsTrigger value="orders">Мои заказы</TabsTrigger>
          <TabsTrigger value="refunds">Возвраты</TabsTrigger>
        </TabsList>
        <p className="text-body2 text-gray-middle">
          Здесь вы можете отследить заказ, оформить возврат и просмотреть
          историю покупок
        </p>
        <TabsContent value="orders">
          <OrdersList />
        </TabsContent>
      </Tabs>
    </Container>
  );
};

export default OrdersTab;
