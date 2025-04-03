import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const PackageIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      className={cn("fill-white transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="m20 20.654 4-2 4 2V10h-8v10.654ZM14 33v-2h10v2H14Zm-6 7V8h32v32H8Zm2-2h28V10h-8v13.924l-6-3-6 3V10h-8v28Z" />
    </svg>
  );
};

export default PackageIcon;
