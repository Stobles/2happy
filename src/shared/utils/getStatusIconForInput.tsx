import { FieldError } from "react-hook-form";
import SuccessIcon from "@/shared/components/icons/SuccessIcon";
import ErrorIcon from "@/shared/components/icons/ErrorIcon";

export const getStatusIcon = <T,>(value: T, error?: FieldError | undefined) => {
  if (error) {
    return <ErrorIcon />;
  }

  if (typeof value === "object") {
    if (value && !error) return <SuccessIcon />;
  }

  if (typeof value === "string") {
    if (value.length > 0 && !error) return <SuccessIcon />;
  }

  return null;
};
