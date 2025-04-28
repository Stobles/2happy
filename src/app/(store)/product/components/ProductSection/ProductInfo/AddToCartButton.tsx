"use client";

import { useAddToCart } from "@/features/Cart/api/cartMutations";
import { Button } from "@/shared/components/UI/Button";

import Cookies from "js-cookie";

const AddToCartButton = ({
  variationId,
  quantity,
}: {
  variationId: number;
  quantity: number;
}) => {
  const nonce = Cookies.get("nonce");
  const { mutate, isPending } = useAddToCart({});
  return (
    <Button
      className="w-full"
      disabled={isPending}
      onClick={() =>
        mutate({ params: { id: variationId, quantity: quantity }, nonce })
      }
    >
      Добавить в корзину
    </Button>
  );
};

export default AddToCartButton;
