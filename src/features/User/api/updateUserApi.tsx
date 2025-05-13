import { getUserQueryOptions } from "@/shared/api/authApi";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { getQueryClient } from "@/shared/api/queryClient";
import { UserData } from "@/shared/types/api";
import { useMutation } from "@tanstack/react-query";

import { z } from "zod";

const updateUserURL = "/wp/v2/users/{id}";

export const updateUserSchema = z
  .object({
    name: z.string().min(2, {
      message: "Имя должно содержать минимум 2 символа",
    }),
    surname: z.string().min(2, {
      message: "Фамилия должна содержать минимум 2 символа",
    }),
    email: z.string().email("Введите корректный email"),
    confirmEmail: z.string().email("Введите корректный email повторно"),
    phone: z
      .string()
      .min(10, "Введите корректный номер телефона")
      .regex(/^\+?\d{10,15}$/, "Некорректный формат номера"),
    birthday: z.date({
      required_error: "Укажите дату рождения",
      invalid_type_error: "Некорректная дата",
    }),
  })
  .refine((data) => data.email === data.confirmEmail, {
    path: ["confirmEmail"],
    message: "Email не совпадает",
  });

export type UpdateUserInput = Omit<
  z.infer<typeof updateUserSchema>,
  "confirmEmail"
>;

const updateUser = ({
  id,
  data,
}: {
  id: number;
  data: UpdateUserInput;
}): Promise<UserData> => {
  const formattedData = {
    first_name: data.name,
    last_name: data.surname,
    email: data.email,
    meta: {
      birth_date: data.birthday,
      phone_number: data.phone,
    },
  };

  return formattedApiInstance.put(
    updateUserURL.replace("{id}", `${id}`),
    formattedData
  );
};

export const useUpdateUser = () => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: updateUser,
    onSuccess: (res) => {
      queryClient.setQueryData(getUserQueryOptions().queryKey, res);
    },
  });
};
