import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const ChevronIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    className={cn(" fill-main transition-[fill,stroke,transform]", className)}
  >
    <path d="m12.75 15-6-5.29388L7.5503 9l5.1997 4.5878L17.9497 9l.8003.70612L12.75 15Z" />
  </svg>
);

export default ChevronIcon;
