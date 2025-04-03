import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const CheckIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="M9.595 18 4 12.312l1.399-1.422 4.196 4.266L18.601 6 20 7.422 9.595 18Z" />
  </svg>
);

export default CheckIcon;
