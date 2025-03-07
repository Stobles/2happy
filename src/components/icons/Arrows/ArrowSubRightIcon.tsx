import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const ArrowSubRightIcon = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="m14.3077 23 4.7369-6.6H2V1h1.53846v13.9333H19.0446l-4.7461-6.60877L22 15.6667 14.3077 23Z" />
  </svg>
);

export default ArrowSubRightIcon;
