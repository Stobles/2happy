import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const InfoIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("stroke-main fill-transparent transition-all", className)}
    {...props}
  >
    <path
      stroke="#111112"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 16v-4M12 8h.01"
    />
  </svg>
);

export default InfoIcon;
