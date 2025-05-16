import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef } from "react";

const TabTitle = ({
  children,
  titleClass,
  className,
  ...props
}: { titleClass?: string } & ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "py-4 px-5 bg-light-disabled border border-gray rounded-xs",
        className
      )}
      {...props}
    >
      <h5 className={cn("text-h5", titleClass)}>{children}</h5>
    </div>
  );
};

export default TabTitle;
