import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

interface StyledLinkProps
  extends Omit<ComponentProps<typeof Link>, "className"> {
  children: ReactNode;
  className?: string;
}

const StyledLink = ({ children, className, ...props }: StyledLinkProps) => {
  return (
    <Link
      className={cn(
        "group/link relative flex w-max h-min relative hover:text-lightGrey transition-all text-button-normal",
        className
      )}
      {...props}
    >
      {children}
      <span className="w-0 h-[1px] bg-lightGrey absolute left-0 bottom-0 group-hover/link:w-full transition-all"></span>
    </Link>
  );
};

export default StyledLink;
