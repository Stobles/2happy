import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const SuccessIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn(
        "stroke-status-success fill-transparent transition-[fill,stroke,transform]",
        className
      )}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M22 4 12 14.01l-3-3"
      />
    </svg>
  );
};

export default SuccessIcon;
