"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(`relative w-full flex max-w-[1224px] mx-auto `, className)}
    >
      {children}
    </div>
  );
};

export default Container;
