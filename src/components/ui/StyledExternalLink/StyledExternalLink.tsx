import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

const StyledExternalLink = ({
  children,
  className,
  ...props
}: StyledLinkProps) => {
  return (
    <a
      className={cn(
        "group/link relative w-max h-min relative hover:text-lightGrey transition-all text-button-normal",
        className
      )}
      {...props}
    >
      {children}
      <span className="w-0 h-[1px] bg-lightGrey absolute left-0 bottom-[-1px] group-hover/link:w-full transition-all"></span>
    </a>
  );
};

export default StyledExternalLink;
