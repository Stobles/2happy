import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const TrashIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className={cn(
        "stroke-black fill-transparent transition-[fill,stroke,transform]",
        className
      )}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.695 10.889v6.667m-4.5-6.667v6.667m-4.5-11.112v13.334c0 .59.237 1.154.66 1.571.421.417.994.651 1.59.651h9c.597 0 1.17-.234 1.591-.65.422-.418.66-.983.66-1.572V6.444m-15.75 0h18m-14.626 0L9.07 2h6.75l2.25 4.444"
      />
    </svg>
  );
};

export default TrashIcon;
