import { cn } from "@/lib/utils";
import { SVGProps } from "react";

const HeartIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className={cn("stroke-main fill-transparent transition-all", className)}
    {...props}
  >
    <path d="m12.5 21.5-.842-.77a151.983 151.983 0 0 1-4.5-4.306c-1.186-1.194-2.122-2.248-2.81-3.16-.686-.913-1.166-1.738-1.44-2.475A6.348 6.348 0 0 1 2.5 8.561c0-1.43.48-2.632 1.44-3.603C4.9 3.986 6.087 3.5 7.5 3.5a5.31 5.31 0 0 1 2.75.76c.856.505 1.606 1.242 2.25 2.208.644-.966 1.394-1.703 2.25-2.209A5.31 5.31 0 0 1 17.5 3.5c1.413 0 2.6.486 3.56 1.458.96.971 1.44 2.173 1.44 3.603 0 .747-.136 1.49-.409 2.227-.273.74-.753 1.565-1.44 2.477-.687.912-1.62 1.965-2.799 3.16-1.179 1.193-2.683 2.628-4.51 4.305l-.842.77Z" />
  </svg>
);

export default HeartIcon;
