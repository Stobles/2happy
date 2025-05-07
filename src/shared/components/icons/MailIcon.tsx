import { cn } from "@/shared/utils/cn";
import { SVGProps } from "react";

const MailIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      className={cn(
        " fill-main transition-[fill,stroke,transform] shrink-0",
        className
      )}
      {...props}
    >
      <path d="M5.875 17.516v-13h17v13h-17Zm8.5-5.283-7.5-5.544v9.825h15V6.69l-7.5 5.543Zm0-1.176 7.5-5.541h-15l7.5 5.54Zm-11.5 9.459V9.4h1v10.115H19.26v1H2.875Z" />
    </svg>
  );
};

export default MailIcon;
