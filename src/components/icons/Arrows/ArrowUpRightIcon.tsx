import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const ArrowUpRightIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
  >
    <path d="M5.43511 20 4.5 19.0649 18.1805 5.3572 5.57083 4H20.5v14.9292L19.1428 6.31809 5.43511 20Z" />
  </svg>
);

export default ArrowUpRightIcon;
