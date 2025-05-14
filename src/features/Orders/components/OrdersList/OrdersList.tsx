import { Accordion } from "@/shared/components/UI/Accordion";
import OrderCard from "../OrderCard";
import OrdersNotFound from "./OrdersNotFound";
import OrdersListSelect from "./OrdersListSelect";
import CatalogPagination from "@/shared/components/CatalogPagination";

const OrdersList = () => {
  const hasOrders = true;
  return (
    <>
      {hasOrders ? (
        <Accordion type="multiple">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <div className="flex justify-end">
                <OrdersListSelect />
              </div>
              <div>
                <OrderCard />
              </div>
            </div>
            <div>
              <CatalogPagination
                page={1}
                per_page={10}
                totalItems={120}
                totalPages={12}
                setPage={() => {}}
              />
            </div>
          </div>
        </Accordion>
      ) : (
        <OrdersNotFound />
      )}
    </>
  );
};

export default OrdersList;
