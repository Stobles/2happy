"use client";

import { useUser } from "@/shared/api/authApi";
import { ReactNode } from "react";

const AuthorizedView = ({
  children,
  condition,
}: {
  children: ReactNode;
  condition: boolean;
}) => {
  const { data: user } = useUser();

  if (!!user === condition) return children;
  return null;
};

export default AuthorizedView;
