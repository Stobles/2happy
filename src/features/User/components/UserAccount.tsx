"use client";

import Link from "next/link";

import UserIcon from "@/shared/components/icons/UserIcon";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import AuthModal from "@/features/Auth/components/AuthModal";

import { useLogout, useUser } from "@/shared/api/authApi";
import { paths } from "@/config/paths";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/components/UI/DropdownMenu";
import { useDelayedState } from "@/shared/hooks/useDelayedState";
import { ACCOUNT_TABS } from "../utils/isValidTab";

const UserAccount = () => {
  const { data, isFetching } = useUser();
  const [hasMounted, setHasMounted] = useState(false);

  const { handleLogout } = useLogout();

  const { state: open, setFastState, setDelayedState } = useDelayedState(false);

  const onMouseEnter = () => {
    setFastState(true);
  };

  const onMouseLeave = () => {
    setDelayedState(false, 300);
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  if (data) {
    return (
      <div
        className="flex justify-center items-center"
        onMouseOver={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <DropdownMenu open={open} onOpenChange={(open) => setFastState(open)}>
          <DropdownMenuTrigger>
            <Link className="relative" href={paths.account.getHref()}>
              <UserIcon className="hover:fill-main transition-colors" />
              <span className="absolute top-0 right-0 w-1 h-1 rounded-full bg-red" />
            </Link>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-[272px]"
            align="end"
            sideOffset={28}
          >
            <DropdownMenuLabel>
              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <UserIcon />
                  <span>{data.name}</span>
                </div>
                <div className="ml-8 text-gray-middle text-button-xs lowercase">
                  {data.email}
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={paths.account.getHref({ tab: ACCOUNT_TABS.PROFILE })}>
              <DropdownMenuItem>Профиль</DropdownMenuItem>
            </Link>
            <Link href={paths.account.getHref({ tab: ACCOUNT_TABS.ADDRESSES })}>
              <DropdownMenuItem>Адресная книга</DropdownMenuItem>
            </Link>
            <Link href={paths.account.getHref({ tab: ACCOUNT_TABS.ORDERS })}>
              <DropdownMenuItem>Мои заказы</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Выйти</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
  return (
    <AuthModal triggerProps={{ disabled: !!isFetching }}>
      <UserIcon
        data-tooltip-id="auth"
        data-tooltip-content="Войти"
        className="hover:fill-main transition-colors"
      />

      <StyledTooltip id="auth" />
    </AuthModal>
  );
};

export default UserAccount;
