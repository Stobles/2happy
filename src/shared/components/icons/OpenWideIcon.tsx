import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const OpenWideIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 24 24"
      className={cn("fill-main transition-[fill,stroke,transform]", className)}
      {...props}
    >
      <path d="M2.25 22v-6.25l1.25 4.115 4.5-4.5.885.885-4.5 4.5L8.5 22H2.25ZM16 22l4.115-1.25-4.5-4.5.885-.885 4.5 4.5 1.25-4.115V22H16ZM8 8.635l-4.5-4.5L2.25 8.25V2H8.5L4.385 3.25l4.5 4.5L8 8.635Zm8.5 0-.885-.885 4.5-4.5L16 2h6.25v6.25L21 4.135l-4.5 4.5Zm-4.25 5.024c-.456 0-.846-.163-1.171-.488A1.597 1.597 0 0 1 10.59 12c0-.456.163-.846.488-1.171a1.597 1.597 0 0 1 1.171-.488c.456 0 .846.163 1.171.488.325.325.488.715.488 1.171 0 .456-.163.846-.488 1.171a1.597 1.597 0 0 1-1.171.488Z" />
    </svg>
  );
};

export default OpenWideIcon;
