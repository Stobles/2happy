import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const FiltersIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 24 24"
    className={cn("fill-main transition-all", className)}
    {...props}
  >
    <path d="M6.349 20v-7.59H4.5v-1.066h4.622v1.067H7.273V20H6.35Zm0-11.61V4h.924v4.39H6.35Zm3.84 0V7.322h1.849V4h.924v3.324h1.85V8.39h-4.623ZM12.038 20v-8.656h.924V20h-.924Zm5.689 0v-3.324h-1.85V15.61H20.5v1.066h-1.849V20h-.924Zm0-7.343V4h.924v8.657h-.924Z" />
  </svg>
);

export default FiltersIcon;
