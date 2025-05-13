export const ACCOUNT_TABS = {
  PROFILE: "profile",
  ADDRESSES: "addresses",
  ORDERS: "orders",
} as const;

export type AccountTabs = (typeof ACCOUNT_TABS)[keyof typeof ACCOUNT_TABS];

export const isValidTab = (value: string | null): value is AccountTabs => {
  if (!value) return false;
  return Object.values(ACCOUNT_TABS).some((item) => item === value);
};
