import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const GridBigIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 16 16"
    className={cn(
      " stroke-main fill-transparent transition-[fill,stroke,transform]",
      className
    )}
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M7 1H1v6h6V1Zm0 8H1v6h6V9Zm2-8h6v6H9V1Zm6 8H9v6h6V9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default GridBigIcon;
