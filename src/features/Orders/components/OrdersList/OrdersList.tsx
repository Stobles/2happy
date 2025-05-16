import { Accordion } from "@/shared/components/UI/Accordion";
import OrderCard, { OrderCardLoader } from "../OrderCard";
import OrdersNotFound from "./OrdersNotFound";
import OrdersListSelect from "./OrdersListSelect";
import CatalogPagination from "@/shared/components/CatalogPagination";
import { useQuery } from "@tanstack/react-query";
import { getOrdersQueryOptions } from "../../api/ordersApi";
import { useMemo, useState } from "react";
import { useUser } from "@/shared/api/authApi";

const OrdersList = () => {
  const { data: user } = useUser();

  const [sort, setSort] = useState<string>("desc:date");
  const [order, orderby] = useMemo(() => sort.split(":"), [sort]);

  const [page, setPage] = useState<number>(1);

  const {
    data: orders,
    isPending,
    isPlaceholderData,
  } = useQuery({
    ...getOrdersQueryOptions({
      orderby,
      order,
      customer: user?.id,
      page,
      per_page: 10,
    }),
    placeholderData: (previousData) => previousData,
  });

  if (isPending && !isPlaceholderData) {
    return (
      <div className="space-y-4">
        <OrderCardLoader />
        <OrderCardLoader />
      </div>
    );
  }

  if (!orders?.totalItems || (orders?.totalItems && orders.totalItems === "0"))
    return <OrdersNotFound />;

  return (
    <Accordion type="multiple">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <OrdersListSelect
              value={sort}
              onSelect={(value) => setSort(value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            {orders.items.map((item) => (
              <OrderCard key={item.id} order={item} />
            ))}
          </div>
        </div>
        <div>
          <CatalogPagination
            page={page}
            per_page={10}
            totalItems={Number(orders?.totalItems) ?? 0}
            totalPages={Number(orders?.totalPages) ?? 0}
            setPage={setPage}
          />
        </div>
      </div>
    </Accordion>
  );
};

export default OrdersList;
