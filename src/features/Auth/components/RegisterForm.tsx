import { Button } from "@/components/UI/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/Form";
import { Input } from "@/components/UI/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Checkbox } from "@/components/UI/Checkbox";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Пароль должен содержать не менее 8 символов")
    .regex(/[A-Za-z]/, "Пароль должен содержать хотя бы одну букву")
    .regex(
      /[0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
      "Пароль должен содержать хотя бы одну цифру или специальный символ"
    ),
  politic: z.boolean(),
  notifications: z.boolean().optional(),
});

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      politic: false,
      notifications: false,
    },
  });

  const onSubmit = () => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Пароль" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="politic"
          render={({ field }) => (
            <FormItem className="flex items-start">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="mt-0">
                Подтверждаю свое согласие на обработку персональных данных и
                ознакомление с «Политикой конфиденциальности».
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="mt-0">
                Подписаться на рассылку о новых коллекциях, распродажах.
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full mt-4" size="normal" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
