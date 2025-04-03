import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { apiInstance } from "./apiInstance";
import { AuthResponse, UserData } from "@/shared/types/api";
import { z } from "zod";
import { useAuthStore } from "@/shared/store/authStore";
import Cookies from "js-cookie";

export const getUserURL = "/wp/v2/users/me";

export const getUser = async (): Promise<UserData> => {
  const response = await apiInstance.get<unknown, UserData>(getUserURL);

  return response;
};

const userQueryKey = ["user"];

export const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: userQueryKey,
    queryFn: getUser,
  });
};

export const useUser = () => {
  const userToken = useAuthStore((state) => state.userToken);
  return useQuery({
    ...getUserQueryOptions(),
    enabled: !!userToken,
    retry: false,
  });
};

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const setAccessToken = useAuthStore((state) => state.setUserToken);
  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ token }) => {
      Cookies.set("access_token", token);
      setAccessToken(token);
      queryClient.invalidateQueries(getUserQueryOptions());
      onSuccess?.();
    },
    onError: onError,
  });
};

export const loginInputSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Пароль должен содержать не менее 8 символов"),
  remember: z.boolean().optional(),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

const loginUser = (data: LoginInput): Promise<AuthResponse> => {
  const modifiedData = { username: data.email, password: data.password };
  return apiInstance.post<
    unknown,
    AuthResponse,
    { username: string; password: string }
  >("/jwt-auth/v1/token", modifiedData);
};

export const useRegister = ({ onSuccess }: { onSuccess?: () => void }) => {
  const queryClient = useQueryClient();
  const setAccessToken = useAuthStore((state) => state.setUserToken);
  return useMutation({
    mutationFn: registerUser,
    onSuccess: ({ token }) => {
      Cookies.set("access_token", token);
      setAccessToken(token);
      queryClient.invalidateQueries(getUserQueryOptions());
      onSuccess?.();
    },
  });
};

export const registerInputSchema = z
  .object({
    name: z
      .string()
      .min(1, "Введите имя")
      .refine(
        (val) => val.trim().length > 0,
        "Имя не может состоять из пробелов"
      )
      .refine((val) => !/\s+/g.test(val), {
        message: "Имя не должно содержать пробелы",
      }),
    email: z.string().email("Неверный Email"),
    password: z
      .string()
      .min(8, "Пароль должен содержать не менее 8 символов")
      .regex(/[A-Za-z]/, "Пароль должен состоять из латинских букв")
      .regex(
        /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
        "Пароль должен содержать хотя бы одну цифру или специальный символ"
      ),
    repeatPassword: z.string().min(1, "Заполните поле"),
    politic: z.boolean().refine((value) => value === true, {
      message: "Вы должны принять политику конфиденциальности",
    }),
    notifications: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["repeatPassword"],
      });
    }
  });

export type RegisterInput = Omit<
  z.infer<typeof registerInputSchema>,
  "politic" | "repeatPassword"
>;

const registerUser = (data: RegisterInput): Promise<AuthResponse> => {
  return apiInstance.post("/custom/v1/register", data);
};
