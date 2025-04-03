import FacebookIcon from "@/shared/components/icons/Social/FacebookIcon";
import InstagramIcon from "@/shared/components/icons/Social/InstagramIcon";
import TwitterIcon from "@/shared/components/icons/Social/TwitterIcon";
import { ReactNode } from "react";

interface IFooterLink {
  href: string;
  text: string;
}

export const socialIcons: { href: string; element: ReactNode }[] = [
  {
    href: "/",
    element: <FacebookIcon />,
  },
  {
    href: "/",
    element: <TwitterIcon />,
  },
  {
    href: "/",
    element: <InstagramIcon />,
  },
];

export const clientsLinks: IFooterLink[] = [
  {
    href: "/",
    text: "Ваши заказы",
  },
  {
    href: "/",
    text: "Отложенные",
  },
  {
    href: "/",
    text: "Программа лояльности",
  },
  {
    href: "/",
    text: "Оплата и доставка",
  },
  {
    href: "/",
    text: "Условия возврата / обмена",
  },
  {
    href: "/",
    text: "Сертификат / Подарочная карта",
  },
  {
    href: "/",
    text: "Рассрочка от KASPI RED",
  },
];

export const storeLinks: IFooterLink[] = [
  {
    href: "/",
    text: "Обратная связь",
  },
  {
    href: "/",
    text: "О нас",
  },
  {
    href: "/",
    text: "Отзывы",
  },
  {
    href: "/",
    text: "Партнёрам",
  },
  {
    href: "/",
    text: "Публичная оферта",
  },
  {
    href: "/",
    text: "Политика конфиденциальности",
  },
];

export const mainBlocks: { title: string; links: IFooterLink[] }[] = [
  {
    title: "Для клиентов",
    links: clientsLinks,
  },
  {
    title: "Магазин",
    links: storeLinks,
  },
];
