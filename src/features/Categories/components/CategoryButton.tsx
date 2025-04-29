import { cn } from "@/shared/utils/cn";
import { Button } from "@/shared/components/UI/Button";
import { ReactNode } from "react";

import Link from "next/link";
import { Slot } from "@radix-ui/react-slot";

const CategoryButton = ({
  children,
  href,
  isActive = false,
  className,
  asChild,
}: {
  children: ReactNode;
  href?: string;
  isActive?: boolean;
  className?: string;
  asChild?: boolean;
}) => {
  const Component = asChild ? Slot : Link;
  return (
    <Button
      className={cn(
        "text-button-normal py-2 px-4 hover:shadow-elevation-1",
        isActive && "bg-main text-white",
        className
      )}
      variant="secondary"
      size="small"
      asChild
    >
      <Component href={href ?? ""}>{children}</Component>
    </Button>
  );
};

export default CategoryButton;
