"use client";

import { useAddToCart } from "../api/cartMutations";
import { CartResponse } from "../types";
import { Button } from "@/shared/components/UI/Button";

import { ComponentPropsWithoutRef } from "react";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";

const AddToCartButton = ({
  variationId,
  quantity = 1,
  onSuccess,
  onClick,
  disabled,
  children,
  ...props
}: {
  variationId: number;
  quantity?: number;
  onSuccess?: (data: CartResponse) => void;
} & ComponentPropsWithoutRef<"button">) => {
  const { mutate, isPending } = useAddToCart({
    onSuccess,
  });

  return (
    <>
      <Button
        className="w-full"
        disabled={isPending || disabled}
        onClick={(e) => {
          mutate({
            id: variationId,
            quantity: quantity,
          });
          onClick?.(e);
        }}
        {...props}
      >
        {isPending && <LoaderIcon className="animate-spin" />}
        {children}
      </Button>
    </>
  );
};

export default AddToCartButton;
