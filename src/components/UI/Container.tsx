"use client";

import useIsTablet from "@/hooks/useIsTablet";
import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  column = false,
  className,
}: {
  children: React.ReactNode;
  column?: boolean;
  className?: string;
}) => {
  const isTablet = useIsTablet();
  return (
    <div
      className={cn(
        `relative w-full flex ${column ? "flex-col" : "flex-row"} ${
          isTablet ? "max-w-[100%]" : "max-w-[1224px]"
        } mx-auto `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
