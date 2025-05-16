import { z } from "zod";

export const checkoutForm = z.object({
  email: z.string().email("Некорректный email"),
  addressId: z.number().optional(),
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
  subscribe: z.boolean().optional(),
  saveAddress: z.boolean().optional(),
  agreement: z.boolean().refine((value) => value === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});

export type CheckoutFormInput = z.infer<typeof checkoutForm>;
