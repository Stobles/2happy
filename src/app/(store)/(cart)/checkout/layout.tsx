"use client";

import { useCheckoutStore } from "@/features/Cart/store/checkoutStore";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

const CheckoutLayout = ({ children }: { children: ReactNode }) => {
  // const { token } = useCheckoutStore();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!token) router.back();
  // }, []);
  return children;
};

export default CheckoutLayout;
