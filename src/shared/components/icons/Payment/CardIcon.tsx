import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const CardIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <g clipPath="url(#a)">
        <path d="M.445 20V4h24v16h-24ZM1.78 8.352h21.333v-3.21H1.779v3.21Zm0 10.505h21.333v-7.78H1.779v7.78Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.445 0h24v24h-24z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CardIcon;
