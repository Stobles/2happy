import { env } from "@/config/env";
import { getUserQueryOptions } from "@/shared/api/authApi";
import { formattedApiInstance } from "@/shared/api/formattedApiInstance";
import { getQueryClient } from "@/shared/api/queryClient";
import { CustomAPIError, UserAddress, UserData } from "@/shared/types/api";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { z } from "zod";

const createUserAddressURL = `${env.CUSTOM_API}/users/{user_id}/addresses`;

export const addressSchema = z.object({
  firstName: z.string().nonempty("Имя обязательно"),
  lastName: z.string().nonempty("Фамилия обязательна"),
  address: z.string().nonempty("Адрес обязателен"),
  postalCode: z.string().nonempty("Почтовый индекс обязателен"),
  country: z.string().nonempty("Страна обязательна"),
  region: z.string().optional(),
  city: z.string().nonempty("Город обязателен"),
  phone: z
    .string()
    .nonempty("Телефон обязателен")
    .min(10, "Телефон должен содержать не меньше 10 символов"),
  isDefaultShipping: z.boolean().default(false),
  isDefaultBilling: z.boolean().default(false),
});

export type UpdateUserAddressInput = z.infer<typeof addressSchema>;

const createUserAddress = ({
  user_id,
  data,
}: {
  user_id: number;
  data: UpdateUserAddressInput;
}): Promise<UserAddress[]> => {
  return formattedApiInstance.post<unknown, UserAddress[]>(
    createUserAddressURL.replace("{user_id}", `${user_id}`),
    data
  );
};

export const useCreateUserAddress = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  UserAddress[],
  AxiosError<CustomAPIError>,
  { user_id: number; data: UpdateUserAddressInput },
  unknown
>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: createUserAddress,
    onSuccess: (res, variables, context) => {
      queryClient.setQueryData(getUserQueryOptions().queryKey, (old) => {
        if (!old) return old;
        return { ...old, multiple_addresses: [...res] };
      });
      onSuccess?.(res, variables, context);
    },
    onError: (err, variables, context) => {
      onError?.(err, variables, context);
    },
    ...options,
  });
};

const mutateUserAddressURL = `${env.CUSTOM_API}/users/{user_id}/addresses/{id}`;

const updateUserAddress = ({
  id,
  user_id,
  data,
}: {
  id: number;
  user_id: number;
  data: UpdateUserAddressInput;
}): Promise<UserAddress[]> => {
  return formattedApiInstance.put<unknown, UserAddress[]>(
    mutateUserAddressURL
      .replace("{id}", `${id}`)
      .replace("{user_id}", `${user_id}`),
    data
  );
};

export const useUpdateUserAddress = ({
  onSuccess,
  onError,
  ...options
}: UseMutationOptions<
  UserAddress[],
  AxiosError<CustomAPIError>,
  { user_id: number; data: UpdateUserAddressInput },
  unknown
>) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: updateUserAddress,
    onSuccess: (res, variables, context) => {
      queryClient.setQueryData(getUserQueryOptions().queryKey, (old) => {
        if (!old) return old;
        return { ...old, multiple_addresses: [...res] };
      });
      onSuccess?.(res, variables, context);
    },
    onError: (err, variables, context) => {
      onError?.(err, variables, context);
    },
    ...options,
  });
};

const deleteUserAddress = ({
  id,
  user_id,
}: {
  id: number;
  user_id: number;
}): Promise<UserData> => {
  return formattedApiInstance.delete(
    mutateUserAddressURL
      .replace("{id}", `${id}`)
      .replace("{user_id}", `${user_id}`)
  );
};

export const useDeleteUserAddress = ({
  onSuccess,
}: {
  onSuccess?: () => void;
}) => {
  const queryClient = getQueryClient();
  return useMutation({
    mutationFn: deleteUserAddress,
    onSuccess: (_, variables) => {
      const userData = queryClient.getQueryData(getUserQueryOptions().queryKey);

      if (!userData) return;

      const newUserData = { ...userData };

      if (newUserData?.multiple_addresses) {
        newUserData.multiple_addresses = newUserData.multiple_addresses.filter(
          (item) => item.id != variables.id
        );
      }

      queryClient.setQueryData(getUserQueryOptions().queryKey, newUserData);
      onSuccess?.();
    },
  });
};
