import { FieldError } from "react-hook-form";
import SuccessIcon from "@/shared/components/icons/SuccessIcon";
import ErrorIcon from "@/shared/components/icons/ErrorIcon";

export const getStatusIcon = (
  value: string,
  error?: FieldError | undefined
) => {
  if (error) {
    return <ErrorIcon />;
  }

  if (value.length > 0 && !error) return <SuccessIcon />;

  return null;
};
