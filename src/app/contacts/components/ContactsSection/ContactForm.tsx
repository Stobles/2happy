"use client";

import { Button } from "@/shared/components/UI/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/UI/Form";
import { Input } from "@/shared/components/UI/Input";
import { Textarea } from "@/shared/components/UI/Textarea";
import { cn } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentPropsWithoutRef } from "react";
import { z } from "zod";
import LoaderIcon from "@/shared/components/icons/LoaderIcon";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/shared/components/UI/Checkbox";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Имя должно содержать не менее 2 символов" })
    .max(50, { message: "Имя слишком длинное" }),
  email: z.string().email({ message: "Введите корректный email" }),
  subject: z
    .string()
    .min(3, { message: "Тема сообщения должна содержать не менее 3 символов" })
    .max(150, { message: "Тема слишком длинная" }),
  message: z
    .string()
    .min(10, { message: "Сообщение должно содержать не менее 10 символов" })
    .max(280, { message: "Сообщение слишком длинное" }),
  agreement: z.boolean().refine((value) => value === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

const ContactsForm = ({
  onSubmit,
  isPending,
  className,
  ...props
}: {
  onSubmit: (data: ContactFormInput) => void;
  isPending: boolean;
} & ComponentPropsWithoutRef<"form">) => {
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      agreement: false,
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-12", className)}
        {...props}
      >
        <div className="space-y-4">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-x-6">
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
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Тема сообщения" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Ваше сообщение"
                      rows={5}
                      showCharLimit
                      maxLength={280}
                      className="max-h-[300px]"
                      error={fieldState.error}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="agreement"
            render={({ field, fieldState }) => (
              <FormItem className="flex-row items-center">
                <FormControl>
                  <Checkbox
                    className={`size-6 ${
                      fieldState.error ? "shadow-sm shadow-red border-red" : ""
                    }`}
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="mt-0 text-button-xs text-gray-dark">
                  Подтверждаю свое согласие на обработку персональных данных и
                  ознакомление <br /> с «Политикой конфиденциальности» .
                </FormLabel>
              </FormItem>
            )}
          />
        </div>

        <Button
          disabled={isPending || !form.formState.isDirty}
          type="submit"
          className="w-full"
        >
          {isPending && <LoaderIcon className="animate-spin mr-2" />}
          Отправить
        </Button>
      </form>
    </Form>
  );
};

export default ContactsForm;
