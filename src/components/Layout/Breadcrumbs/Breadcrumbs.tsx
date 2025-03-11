"use client";

import { Breadcrumb, BreadcrumbList } from "@/components/UI/Breadcrumb";
import { ReactNode } from "react";
import { BreadcrumbsContext } from "./context/BreadcrumbsContext";
import Container from "@/components/UI/Container";
import Crumb from "./components/Crumb";
import { useBreadcrumbsList } from "./hooks/useBreadcrumbsList";

export type Breadcrumb = {
  text: string;
  href: string;
};

const Breadcrumbs = ({ children }: { children: ReactNode }) => {
  const { breadcrumbs, context } = useBreadcrumbsList();
  return (
    <>
      <div className="border-b border-main">
        <Container className="my-6">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <Crumb
                  key={breadcrumb.text}
                  breadcrumb={breadcrumb}
                  isLast={index === breadcrumbs.length - 1}
                />
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </div>
      <BreadcrumbsContext.Provider value={context}>
        {children}
      </BreadcrumbsContext.Provider>
    </>
  );
};

export default Breadcrumbs;
