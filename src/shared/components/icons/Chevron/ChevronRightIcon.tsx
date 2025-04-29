import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const ChevronRightIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 24 24"
    className={cn(" fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="M13.7545 12 9.16675 6.8003 9.87286 6l5.29384 6-5.29384 6-.70611-.8003L13.7545 12Z" />
  </svg>
);

export default ChevronRightIcon;
