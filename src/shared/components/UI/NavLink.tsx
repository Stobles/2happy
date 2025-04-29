"use client";

import { cn } from "@/shared/utils/cn";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

const NavLink = ({
  children,
  href,
  className,
  ...props
}: LinkProps & ComponentPropsWithoutRef<"a">) => {
  const pathname = usePathname();

  const isActive = pathname.split("?")[0].includes(href.split("?")[0]);

  return (
    <Link
      className={cn(
        "text-button-normal link-hover",
        isActive && "link-active",
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
