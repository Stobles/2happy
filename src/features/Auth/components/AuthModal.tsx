"use client";

import AppleIcon from "@/shared/components/icons/Social/AppleIcon";
import GoogleIcon from "@/shared/components/icons/Social/GoogleIcon";
import { Button } from "@/shared/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/UI/Tabs";
import { ReactNode, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({
  children,
  defaultTab = "login",
  disabled,
}: {
  children: ReactNode;
  disabled?: boolean;
  defaultTab?: "login" | "register";
}) => {
  const [open, setOpen] = useState<boolean>(false);

  const closeDialog = () => setOpen(false);
  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger
        disabled={disabled}
        className="disabled:pointer-events-none disabled:opacity-60"
      >
        {children}
      </DialogTrigger>
      <DialogContent className="px-8 gap-10" closeClassName="top-10 right-8">
        <DialogHeader>
          <DialogTitle>Войдите или создайте аккаунт</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          <Tabs defaultValue={defaultTab}>
            <TabsList borderClass="bg-light-disabled">
              <TabsTrigger className="uppercase" value="login">
                Войти
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="register">
                Создать аккаунт
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-full mt-8 ring-0" value="login">
              <LoginForm onSuccess={closeDialog} />
            </TabsContent>
            <TabsContent className="w-full mt-8 ring-0" value="register">
              <RegisterForm onSuccess={closeDialog} />
            </TabsContent>
          </Tabs>
          <span className="flex gap-2 items-center uppercase text-gray after:w-full after:h-[1px] after:bg-gray before:w-full before:h-[1px] before:bg-gray">
            Или
          </span>
          <div className="flex flex-col gap-4">
            <Button variant="secondary" size="normal" className="w-full">
              <GoogleIcon />
              Войти через Google
            </Button>
            <Button variant="secondary" size="normal" className="w-full">
              <AppleIcon />
              Войти через Apple
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
