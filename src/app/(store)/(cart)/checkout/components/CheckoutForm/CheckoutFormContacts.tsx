"use client";

import { Button } from "@/shared/components/UI/Button";
import { Checkbox } from "@/shared/components/UI/Checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/UI/Form";
import { Input } from "@/shared/components/UI/Input";
import { PhoneInput } from "@/shared/components/UI/PhoneInput";
import { getStatusIcon } from "@/shared/lib/getStatusIconForInput";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  address: z.string().min(5, {
    message: "Username must be at least 2 characters.",
  }),
  index: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
  country: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
  region: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
  city: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(6, {
    message: "Username must be at least 2 characters.",
  }),
});

const CheckoutFormContacts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      address: "",
      index: "",
      country: "",
      region: "",
      city: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => {
              return (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Имя"
                      endIcon={getStatusIcon(field.value, fieldState.error)}
                      hasError={!!fieldState.error}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Фамилия"
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    hasError={!!fieldState.error}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Адрес*"
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    hasError={!!fieldState.error}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="index"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Почтовый индекс*"
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    hasError={!!fieldState.error}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Страна*"
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    hasError={!!fieldState.error}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="region"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Область регион"
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    hasError={!!fieldState.error}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Город*"
                    endIcon={getStatusIcon(field.value, fieldState.error)}
                    hasError={!!fieldState.error}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-row items-center">
                <FormControl>
                  <Checkbox
                    className="size-6"
                    checked={false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="mt-0 text-button-xs text-gray-dark">
                  Подписаться на рассылку о новых коллекциях, распродажах.
                </FormLabel>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-row items-center">
                <FormControl>
                  <Checkbox
                    className="size-6"
                    checked={false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="mt-0 text-button-xs text-gray-dark">
                  Подтверждаю свое согласие на обработку персональных данных и
                  ознакомление с 
                  <Link href="/" className="underline text-black">
                    «Политикой конфиденциальности»
                  </Link>
                  .
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full">
          Продолжить
        </Button>
      </form>
    </Form>
  );
};

export default CheckoutFormContacts;
