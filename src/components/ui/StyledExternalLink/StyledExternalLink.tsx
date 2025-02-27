import { cn } from "@/lib/utils";
import { AnchorHTMLAttributes, ElementType, ReactNode } from "react";

interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  element?: ElementType;
  className?: string;
}

const StyledExternalLink = ({
  children,
  element: Component = "div",
  className,
  ...props
}: StyledLinkProps) => {
  return (
    <Component className={cn("group relative w-max", className)}>
      <a
        className="relative group-hover:text-lightGrey transition-all"
        {...props}
      >
        {children}
      </a>
      <span className="w-0 h-[1px] bg-lightGrey absolute left-0 bottom-0 group-hover:w-full transition-all"></span>
    </Component>
  );
};

export default StyledExternalLink;
