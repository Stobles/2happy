"use client";

import { useUser } from "@/shared/api/authApi";
import { paths } from "@/config/paths";
import AuthModal from "@/features/Auth/components/AuthModal";
import Link from "next/link";

const AccountList = () => {
  const user = useUser();
  return (
    <li className="basis-full">
      <h4 className="text-h4 text-white pb-4">Аккаунт</h4>
      <ul className="space-y-2 text-white-secondary">
        {user.data ? (
          <li>
            <Link
              href={paths.account.root.getHref()}
              className="link-hover text-button-xs"
            >
              Личный кабинет
            </Link>
          </li>
        ) : (
          <>
            <li className="text-button-xs">
              <AuthModal>
                <span className="link-hover">Войти</span>
              </AuthModal>
            </li>
            <li className="text-button-xs">
              <AuthModal defaultTab="register">
                <span className="link-hover">Создать учетную запись</span>
              </AuthModal>
            </li>
          </>
        )}
      </ul>
    </li>
  );
};

export default AccountList;
