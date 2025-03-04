import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const ArrowRightIcon = ({ className }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
  >
    <path d="m9.93371 14 3.86399-5.43482H0V7.43481h13.7977L9.93371 2 16 8l-6.06629 6Z" />
  </svg>
);

export default ArrowRightIcon;
