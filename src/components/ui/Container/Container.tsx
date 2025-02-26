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
        `w-full flex ${column ? "flex-col" : "flex-row"} ${
          isTablet ? "max-w-[100%]" : "max-w-[1200px]"
        } max-h-max mx-auto px-2`,
        className
      )}
    >
      {children}
    </div>
  );
};

// const Container = ({
//   children,
//   column = false,
//   sx,
// }: {
//   children: React.ReactNode;
//   column?: boolean;
//   sx?: SxProps<Theme>;
// }) => {
//   const isTablet = useIsTablet();

//   return (
//     <Stack
//       direction={column ? "column" : "row"}
//       sx={{
//         maxWidth: isTablet ? "100%" : "1228px",
//         width: "100%",
//         maxHeight: "max-content",
//         ...sx,
//       }}
//     >
//       {children}
//     </Stack>
//   );
// };

export default Container;
