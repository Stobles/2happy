import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const CopyIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M7.5 17V3h11v14h-11Zm1-1h9V4h-9v12Zm-4 4V6.616h1V19h9.385v1H4.5Z" />
    </svg>
  );
};

export default CopyIcon;
