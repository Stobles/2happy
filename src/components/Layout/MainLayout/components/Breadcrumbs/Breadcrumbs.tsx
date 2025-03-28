import { Breadcrumb } from "@/components/UI/Breadcrumb";
import Container from "@/components/UI/Container";
import { ReactNode } from "react";

const Breadcrumbs = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="border-b border-main">
        <Container className="my-6">
          <Breadcrumb>{children}</Breadcrumb>
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
