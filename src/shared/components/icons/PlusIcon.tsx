import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const PlusIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M4.445 12.615v-1.23h7.385V4h1.23v7.385h7.385v1.23h-7.384V20H11.83v-7.385H4.445Z" />
    </svg>
  );
};

export default PlusIcon;
