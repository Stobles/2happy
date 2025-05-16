import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const InstagramBoldIcon = ({
  className,
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={cn("fill-white transition-all", className)}
      {...props}
    >
      <path
        fill="#111112"
        d="M15.333 5.333a3.344 3.344 0 0 1 3.334 3.334v6.666a3.344 3.344 0 0 1-3.334 3.334H8.667a3.344 3.344 0 0 1-3.334-3.334V8.667a3.344 3.344 0 0 1 3.334-3.334h6.666Zm0-1.333H8.667A4.68 4.68 0 0 0 4 8.667v6.666A4.68 4.68 0 0 0 8.667 20h6.666A4.68 4.68 0 0 0 20 15.333V8.667A4.68 4.68 0 0 0 15.333 4Z"
      />
      <path
        fill="#111112"
        d="M16.336 8.666a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12 9.333a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
      />
    </svg>
  );
};

export default InstagramBoldIcon;
