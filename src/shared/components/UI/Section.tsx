"use client";
import { cn } from "@/shared/lib/utils";
import React from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("relative flex w-screen justify-center", className)}>
      {children}
    </section>
  );
};

export default Section;
