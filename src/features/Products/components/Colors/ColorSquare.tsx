import { ComponentPropsWithoutRef } from "react";
import { colorsByName } from "../../consts/consts";
import { cn } from "@/shared/utils/cn";

const ColorSquare = ({
  color,
  className,
  ...props
}: { color: string } & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      style={{
        backgroundColor: colorsByName[color],
      }}
      className={cn(
        `w-[16px] h-[16px]`,
        color === "Белый" && "border border-gray",
        className
      )}
      {...props}
    />
  );
};

export default ColorSquare;
