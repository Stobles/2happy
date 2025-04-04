import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const LoaderIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 20 20"
      className={cn(
        " fill-main transition-[fill,stroke,transform] shrink-0",
        className
      )}
      {...props}
    >
      <path d="M10 1v2a7 7 0 1 1-7 7H1a9 9 0 1 0 9-9Z" />
    </svg>
  );
};

export default LoaderIcon;
