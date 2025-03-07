import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const ArrowRightIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="m14.5839 20 4.83-7.2465H2.16675v-1.5071H19.4139l-4.83-7.24643L22.1667 12l-7.5828 8Z" />
  </svg>
);

export default ArrowRightIcon;
