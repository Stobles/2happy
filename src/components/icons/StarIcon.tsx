import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const StarIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="m8 2 1.78 4.057 4.22.527-3.12 3.033.828 4.383L8 11.818 4.292 14l.828-4.383L2 6.584l4.22-.527L8 2Z" />
    </svg>
  );
};

export default StarIcon;
