import { RegisterInput, registerInputSchema } from "@/shared/api/authApi";
import { useForm } from "react-hook-form";
import { getStatusIcon } from "@/shared/lib/getStatusIconForInput";
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

  const onSubmit = (values: RegisterInput) => mutateFn(values);

  return { registerForm, getStatusIcon, onSubmit };
};
