import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const LogoutIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 17 17"
      className={cn(
        " fill-main transition-[fill,stroke,transform] shrink-0",
        className
      )}
      {...props}
    >
      <path d="M2.375 14.516v-3.548h.75v2.798h10.5v-10.5h-10.5v2.797h-.75V2.516h12v12h-12Zm5.135-3.058-.53-.54L9.006 8.89H2.375v-.75h6.632L6.98 6.113l.53-.54 2.943 2.943-2.943 2.942Z" />
    </svg>
  );
};

export default LogoutIcon;
