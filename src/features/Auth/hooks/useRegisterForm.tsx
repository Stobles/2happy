import { RegisterInput, registerInputSchema } from "@/shared/api/authApi";
import { FieldError, useForm } from "react-hook-form";
import SuccessIcon from "@/shared/components/icons/SuccessIcon";
import ErrorIcon from "@/shared/components/icons/ErrorIcon";
import { zodResolver } from "@hookform/resolvers/zod";

export const useRegisterForm = ({
  mutateFn,
}: {
  mutateFn: (value: RegisterInput) => void;
}) => {
  const registerForm = useForm({
    mode: "onChange",
    resolver: zodResolver(registerInputSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
      politic: false,
      notifications: false,
    },
  });

  const getStatusIcon = (value: string, error?: FieldError | undefined) => {
    if (error) {
      return <ErrorIcon />;
    }

    if (value.length > 0 && !error) return <SuccessIcon />;

    return null;
  };

  const onSubmit = (values: RegisterInput) => mutateFn(values);

  return { registerForm, getStatusIcon, onSubmit };
};
