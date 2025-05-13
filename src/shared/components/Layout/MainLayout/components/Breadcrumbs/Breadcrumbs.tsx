import { Breadcrumb } from "@/shared/components/UI/Breadcrumb";
import Container from "@/shared/components/UI/Container";
import { cn } from "@/shared/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

const Breadcrumbs = ({
  children,
  rightSlot,
  className,
  ...props
}: {
  children: ReactNode;
  rightSlot?: ReactNode;
} & ComponentPropsWithoutRef<"div">) => {
  return (
    <>
      <div className={cn("border-b border-main", className)} {...props}>
        <Container className="flex justify-between">
          <Breadcrumb className="my-6">{children}</Breadcrumb>
          {rightSlot}
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
