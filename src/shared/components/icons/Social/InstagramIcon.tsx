import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const InstagramIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      className={cn("fill-white transition-all", className)}
      {...props}
    >
      <path d="M19.357 21.516H6.393a2.517 2.517 0 0 1-2.518-2.518V6.033a2.518 2.518 0 0 1 2.518-2.517h12.964a2.518 2.518 0 0 1 2.518 2.517v12.965a2.517 2.517 0 0 1-2.518 2.518ZM6.393 4.523a1.51 1.51 0 0 0-1.511 1.51v12.965a1.51 1.51 0 0 0 1.51 1.51h12.965a1.51 1.51 0 0 0 1.511-1.51V6.033a1.51 1.51 0 0 0-1.51-1.51H6.392Z" />
      <path d="M12.87 17.016a4.5 4.5 0 1 1 .01-9 4.5 4.5 0 0 1-.01 9Zm0-8.025a3.52 3.52 0 1 0 .01 7.041 3.52 3.52 0 0 0-.01-7.041ZM18.575 8.421a1.075 1.075 0 1 0 0-2.15 1.075 1.075 0 0 0 0 2.15Z" />
    </svg>
  );
};

export default InstagramIcon;
