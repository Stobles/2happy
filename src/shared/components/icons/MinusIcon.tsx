import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const MinusIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M4.445 12.5v-1h16v1h-16Z" />
    </svg>
  );
};

export default MinusIcon;
