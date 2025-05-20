import ThankfulSection from "../components/ThankfulSection";
import OrderDetails from "../components/OrderDetails/OrderDetails";
import LoginSuggest from "../components/LoginSuggest";
import { getQueryClient } from "@/shared/api/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getOrderQueryOptions } from "@/features/Orders/api/ordersApi";
import RecommendedProducts from "../components/RecommendedProducts";

const SuccessCheckoutPage = async ({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) => {
  const queryClient = getQueryClient();

  const { orderId } = await params;

  queryClient.prefetchQuery(getOrderQueryOptions(Number(orderId)));
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ThankfulSection />
      <OrderDetails orderId={Number(orderId)} />
      <RecommendedProducts orderId={Number(orderId)} />
      <LoginSuggest />
    </HydrationBoundary>
  );
};

export default SuccessCheckoutPage;
