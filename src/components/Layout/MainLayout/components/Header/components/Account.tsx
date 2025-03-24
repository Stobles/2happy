import Link from "next/link";

import UserIcon from "@/components/icons/UserIcon";
import StyledTooltip from "@/components/UI/StyledTooltip";
import AuthModal from "@/features/Auth/components/AuthModal";

import { useUser } from "@/api/authApi";

const Account = () => {
  const user = useUser();

  if (user.data) {
    return (
      <Link href="/">
        <UserIcon
          data-tooltip-id="account"
          data-tooltip-content="Аккаунт"
          className="hover:fill-main transition-colors"
        />
        <StyledTooltip id="account" />
      </Link>
    );
  }
  return (
    <AuthModal>
      <UserIcon
        data-tooltip-id="auth"
        data-tooltip-content="Войти"
        className="hover:fill-main transition-colors"
      />
      <StyledTooltip id="auth" />
    </AuthModal>
  );
};

export default Account;
