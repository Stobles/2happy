import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const GridSmallIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 24 24"
    className={cn(
      "stroke-main fill-transparent  transition-[fill,stroke,transform]",
      className
    )}
    {...props}
  >
    <path d="M4.5 20h4.675v-4.656H4.5V20Zm5.675 0h4.65v-4.656h-4.65V20Zm5.65 0H20.5v-4.656h-4.675V20ZM4.5 14.344h4.675V9.656H4.5v4.688Zm5.675 0h4.65V9.656h-4.65v4.688Zm5.65 0H20.5V9.656h-4.675v4.688ZM4.5 8.656h4.675V4H4.5v4.656Zm5.675 0h4.65V4h-4.65v4.656Zm5.65 0H20.5V4h-4.675v4.656Z" />
  </svg>
);

export default GridSmallIcon;
