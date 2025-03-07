import AppleIcon from "@/components/icons/Social/AppleIcon";
import GoogleIcon from "@/components/icons/Social/GoogleIcon";
import { Button } from "@/components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/UI/Dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/UI/Tabs";
import { ReactNode } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ trigger }: { trigger: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger>{trigger}</DialogTrigger>
      <DialogContent className="gap-10" closeClassName="top-10 right-8">
        <DialogHeader>
          <DialogTitle>Войдите или создайте аккаунт</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-8">
          <Tabs className="" defaultValue="login">
            <TabsList>
              <TabsTrigger className="uppercase" value="login">
                Войти
              </TabsTrigger>
              <TabsTrigger className="uppercase" value="register">
                Создать аккаунт
              </TabsTrigger>
            </TabsList>
            <TabsContent className="w-full mt-8 ring-0" value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent className="w-full mt-8 ring-0" value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
          <span className="flex gap-2 items-center uppercase text-lightGrey after:w-full after:h-[1px] after:bg-lightGrey before:w-full before:h-[1px] before:bg-lightGrey">
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
