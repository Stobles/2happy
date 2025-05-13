"use client";

import { ACCOUNT_TABS, isValidTab } from "@/features/User/utils/isValidTab";
import {
  PageTabs,
  PageTabsContent,
  PageTabsList,
  PageTabsTrigger,
} from "@/shared/components/UI/PageTabs";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import { useSearchParams } from "next/navigation";
import { useQueryParams } from "@/shared/hooks/useQueryParams";
import { useUser } from "@/shared/api/authApi";
import AddressesTab from "./components/AddressesTab/AddressesTab";
import OrdersTab from "./components/OrdersTab/OrdersTab";
import Container from "@/shared/components/UI/Container";
import ProfileTabLoader from "./components/ProfileTab/ProfileTabLoader";
import AddressesTabLoader from "./components/AddressesTab/AddressesTabLoader";

const AccountPage = () => {
  const params = useSearchParams();
  const setSearchParams = useQueryParams();

  const tab = params.get("tab");

  const defaultTab = isValidTab(tab) ? tab : ACCOUNT_TABS.PROFILE;

  const handleTabChange = (tab: string) => setSearchParams({ tab });

  const { data, isLoading } = useUser();

  return (
    <div>
      <PageTabs defaultValue={defaultTab} onValueChange={handleTabChange}>
        <PageTabsList>
          <PageTabsTrigger value={ACCOUNT_TABS.PROFILE}>
            Профиль
          </PageTabsTrigger>
          <PageTabsTrigger value={ACCOUNT_TABS.ADDRESSES}>
            Адресная книга
          </PageTabsTrigger>
          <PageTabsTrigger value={ACCOUNT_TABS.ORDERS}>
            Мои заказы
          </PageTabsTrigger>
        </PageTabsList>
        <Container className="w-full my-section">
          <PageTabsContent className="w-full" value={ACCOUNT_TABS.PROFILE}>
            {!isLoading && data ? <ProfileTab /> : <ProfileTabLoader />}
          </PageTabsContent>
          <PageTabsContent className="w-full" value={ACCOUNT_TABS.ADDRESSES}>
            {!isLoading && data ? <AddressesTab /> : <AddressesTabLoader />}
          </PageTabsContent>
          <PageTabsContent className="w-full" value={ACCOUNT_TABS.ORDERS}>
            {!isLoading && data ? <OrdersTab /> : "Загрузка..."}
          </PageTabsContent>
        </Container>
      </PageTabs>
    </div>
  );
};

export default AccountPage;
