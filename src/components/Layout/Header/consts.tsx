import HeartIcon from "@/components/icons/HeartIcon";
import UserIcon from "@/components/icons/UserIcon";

export const subLinks = [
  {
    title: "Покупателям",
    href: "/",
  },
  {
    title: "Контакты",
    href: "/",
  },
];

export const mainLinks = [
  {
    title: "Новинки",
    href: "/",
  },
  {
    title: "Бестселлеры",
    href: "/",
  },
  {
    title: "Коллекции",
    href: "/",
  },
  {
    title: "Final Sale",
    href: "/",
  },
  {
    title: "О нас",
    href: "/",
  },
];

export const iconLinks = [
  {
    href: "/",
    element: <HeartIcon className="hover:fill-main" />,
    tooltip: {
      id: "favorite-tooltip",
      content: `Посмотреть список \n отложенных товаров`,
    },
  },
  {
    href: "/",
    element: <HeartIcon className="hover:fill-main" />,
    tooltip: {
      id: "cart-tooltip",
      content: `Корзина`,
    },
  },
  {
    href: "/",
    element: <UserIcon className="hover:fill-main" />,
    tooltip: {
      id: "user-tooltip",
      content: `Войти`,
    },
  },
];
