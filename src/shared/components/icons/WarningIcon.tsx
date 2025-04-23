import { cn } from "@/shared/lib/utils";
import { SVGProps } from "react";

const WarningIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M5.857 22h13.188c2.27 0 3.4-1.13 3.4-3.367V5.367c0-2.237-1.13-3.367-3.4-3.367H5.857c-2.26 0-3.412 1.119-3.412 3.367v13.266C2.445 20.881 3.597 22 5.857 22Zm.032-1.748c-1.086 0-1.694-.576-1.694-1.706V5.456c0-1.13.608-1.706 1.694-1.706h13.124c1.075 0 1.683.575 1.683 1.705v13.09c0 1.13-.608 1.706-1.683 1.706H5.889Zm6.562-6.312c.522 0 .815-.293.825-.858l.163-5.736c.011-.554-.423-.967-.999-.967-.586 0-1 .402-.989.956l.142 5.747c.01.553.315.858.858.858Zm0 3.53c.63 0 1.173-.5 1.173-1.13 0-.63-.532-1.129-1.173-1.129-.64 0-1.174.51-1.174 1.13 0 .619.544 1.13 1.174 1.13Z" />
    </svg>
  );
};

export default WarningIcon;
