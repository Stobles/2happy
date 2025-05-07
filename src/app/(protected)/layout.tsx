"use client";

import { useUser } from "@/shared/api/authApi";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const ProtectedLayout = ({ children }: { children: ReactNode }) => {
  const { data, isLoading, error } = useUser();

  const router = useRouter();

  if (!isLoading && error) router.replace("/");

  return children;
};

export default ProtectedLayout;
