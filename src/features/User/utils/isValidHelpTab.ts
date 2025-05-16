export const HELP_TABS = {
  REFUNDS: "refunds",
  DELIVERY: "delivery",
  KASPI: "kaspi-red",
} as const;

export const HELP_TABS_NAMES = {
  refunds: "Условия возврата и обмена",
  delivery: "Доставка и оплата",
  "kaspi-red": "Рассрочка от KASPI RED",
} as const;

export type HelpTabs = (typeof HELP_TABS)[keyof typeof HELP_TABS];

export const isValidHelpTab = (value: string | null): value is HelpTabs => {
  if (!value) return false;
  return Object.values(HELP_TABS).some((item) => item === value);
};
