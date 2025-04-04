import Link from "next/link";

import UserIcon from "@/shared/components/icons/UserIcon";
import StyledTooltip from "@/shared/components/UI/StyledTooltip";
import AuthModal from "@/features/Auth/components/AuthModal";

import { useUser } from "@/shared/api/authApi";
import { paths } from "@/config/paths";

const Account = () => {
  const { data, isFetching } = useUser();

  if (data) {
    return (
      <Link href={paths.account.getHref()}>
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
    <AuthModal disabled={isFetching}>
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
