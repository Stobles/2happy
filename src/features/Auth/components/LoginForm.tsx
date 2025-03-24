"use client";

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
import Link from "next/link";
import { Checkbox } from "@/components/UI/Checkbox";
import Notification from "@/components/UI/Notification";
import { useLoginForm } from "../hooks/useLoginForm";
import LoaderIcon from "@/components/icons/LoaderIcon";

const LoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const { loginForm, onSubmit, isPending, error, clearError } = useLoginForm({
    onSuccess,
  });
  return (
    <Form {...loginForm}>
      <form onSubmit={onSubmit} className="space-y-4">
        <FormField
          control={loginForm.control}
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
          control={loginForm.control}
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
        {error && (
          <Notification
            variant="error"
            message={error}
            onCloseClick={clearError}
            showClose
          />
        )}
        <div className="flex justify-between">
          <FormField
            control={loginForm.control}
            name="remember"
            render={({ field }) => (
              <FormItem className="flex-row items-center">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="mt-0">Запомнить</FormLabel>
              </FormItem>
            )}
          />
          <Link
            href="/forgot-password"
            className="link-hover text-darkGrey text-button-xs"
          >
            Забыли пароль?
          </Link>
        </div>
        <Button
          disabled={isPending}
          className="w-full"
          size="normal"
          type="submit"
        >
          {isPending && <LoaderIcon className="animate-spin" />}
          Войти
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
