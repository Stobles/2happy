import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const PlusIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="16"
      viewBox="0 0 17 16"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <g clipPath="url(#a)">
        <path d="M.445 8.615v-1.23H7.83V0h1.23v7.385h7.385v1.23H9.061V16H7.83V8.615H.445Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.445 0h16v16h-16z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
