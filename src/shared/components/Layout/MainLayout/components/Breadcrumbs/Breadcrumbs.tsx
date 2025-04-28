import { Breadcrumb } from "@/shared/components/UI/Breadcrumb";
import Container from "@/shared/components/UI/Container";
import { ReactNode } from "react";

const Breadcrumbs = ({
  children,
  rightSlot,
}: {
  children: ReactNode;
  rightSlot?: ReactNode;
}) => {
  return (
    <>
      <div className="border-b border-main">
        <Container className="flex justify-between">
          <Breadcrumb className="my-6">{children}</Breadcrumb>
          {rightSlot}
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
