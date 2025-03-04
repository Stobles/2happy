import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const CloseIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-[fill,stroke,transform]", className)}
    {...props}
  >
    <path d="M5.6 20 4 18.4l6.4-6.4L4 5.6 5.6 4l6.4 6.4L18.4 4 20 5.6 13.6 12l6.4 6.4-1.6 1.6-6.4-6.4L5.6 20Z" />
  </svg>
);

export default CloseIcon;
