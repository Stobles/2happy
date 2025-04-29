import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const ArrowUpRightIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="m5.10186 20-.93511-.9351L17.8473 5.3572 5.23758 4H20.1667v14.9292L18.8096 6.31809 5.10186 20Z" />
  </svg>
);

export default ArrowUpRightIcon;
