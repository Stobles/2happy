import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const ChevronDownIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="M12.67 17.74 2.26 8.55l1.38-1.23 9.03 7.96 9.02-7.96 1.39 1.23-10.41 9.19z" />
  </svg>
);

export default ChevronDownIcon;
