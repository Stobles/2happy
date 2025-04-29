"use client";

import { useCart } from "@/features/Cart/api/cartQueries";
import CartCard from "@/features/Cart/components/Cards/CartDefaultCard";
import Container from "@/shared/components/UI/Container";
import CartInfo from "./CartInfo";
import { getWordForm } from "@/shared/utils/getWordForm";

const CartList = () => {
  const { data, isPending } = useCart();
  return (
    <Container className="my-section flex-col gap-12">
      <div className="flex gap-2 items-end">
        <h1 className="text-h2">Корзина /</h1>
        {data?.items_count && (
          <span className="text-body2 text-gray-middle mb-1">
            {data?.items_count}{" "}
            {getWordForm(data?.items_count, {
              one: "товар",
              several: "товара",
              many: "товаров",
            })}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-[520px_1fr] gap-x-12 py-3 text-body2 text-gray-middle border-b border-gray">
          <div>Товар</div>
          <div className="grid justify-items-center items-center grid-cols-cartCard justify-between">
            <div>Цена</div>
            <div>Количество</div>
            <div>Сумма</div>
          </div>
        </div>
        <div className="flex flex-col">
          {data?.items_count && (
            <>
              {data?.items.map((item) => (
                <CartCard key={item.key} cartItem={item} />
              ))}
            </>
          )}
        </div>
      </div>
      {data && <CartInfo cartData={data} />}
    </Container>
  );
};

export default CartList;
