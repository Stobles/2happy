import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const ErrorIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn(
        "stroke-status-error fill-transparent transition-[fill,stroke,transform]",
        className
      )}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM12 7v6M12 17h.015"
      />
    </svg>
  );
};

export default ErrorIcon;
