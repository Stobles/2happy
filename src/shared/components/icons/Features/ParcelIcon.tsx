import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const ParcelIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={cn("fill-white transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="m6.348 34.172.471-1.89h8.437l-.47 1.89H6.347Zm3.767-7.121.47-1.89h10.32l-.47 1.89h-10.32ZM37.49 39.147l.942-7.627 1.328-10.971.508-4.093-2.778 22.691ZM12.505 41l.216-1.889h24.77l2.778-22.655h-6.12l-.707 5.655H31.56l.695-5.655h-9.405l-.708 5.655h-1.893l.695-5.655h-5.795l.219-1.9h5.795l.107-.945c.251-2.094.981-3.72 2.19-4.877C24.67 7.577 26.317 6.999 28.405 7c1.839 0 3.341.699 4.506 2.097 1.165 1.397 1.66 3.023 1.482 4.877l-.071.582h8.026L39.124 41h-26.62Zm10.54-26.444h9.405l.071-.582c.129-1.354-.237-2.539-1.096-3.555-.857-1.02-1.949-1.53-3.275-1.53-1.485 0-2.645.411-3.482 1.233-.836.823-1.341 1.986-1.516 3.49l-.107.944Z" />
    </svg>
  );
};

export default ParcelIcon;
