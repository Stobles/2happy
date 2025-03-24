import { LoginInput, loginInputSchema, useLogin } from "@/api/authApi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AxiosError } from "axios";

export const useLoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [error, setError] = useState<string>("");
  const loginForm = useForm({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const { mutate, isPending } = useLogin({
    onSuccess,
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.status === 403) {
          setError("Неверный адрес электронной почты или пароль");
        }
      } else {
        setError("Неизвестная ошибка, приносим извинения");
      }
    },
  });

  return {
    loginForm,
    onSubmit: loginForm.handleSubmit((values: LoginInput) => mutate(values)),
    isPending,
    error,
    clearError: () => setError(""),
  };
};
