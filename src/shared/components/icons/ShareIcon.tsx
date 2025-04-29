import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const ShareIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 24 24"
      className={cn(
        "fill-main transition-[fill,stroke,transform] shrink-0",
        className
      )}
      {...props}
    >
      <path d="M4.273 23V8.187h4.25v1.14h-3.11V21.86h13.673V9.327h-3.11v-1.14h4.25V23H4.272Zm7.407-7.406V3.19L9.287 5.583l-.807-.814L12.25 1l3.769 3.77-.807.813-2.393-2.393v12.404h-1.14Z" />
    </svg>
  );
};

export default ShareIcon;
