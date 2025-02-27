import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ElementType, ReactNode } from "react";

interface StyledLinkProps
  extends Omit<ComponentProps<typeof Link>, "className"> {
  children: ReactNode;
  element?: ElementType;
  className?: string;
}

const StyledLink = ({
  children,
  element: Component = "div",
  className,
  ...props
}: StyledLinkProps) => {
  return (
    <Component className={cn("group relative w-max", className)}>
      <Link
        className="relative group-hover:text-lightGrey transition-all"
        {...props}
      >
        {children}
      </Link>
      <span className="w-0 h-[1px] bg-lightGrey absolute left-0 bottom-0 group-hover:w-full transition-all"></span>
    </Component>
  );
};

export default StyledLink;
