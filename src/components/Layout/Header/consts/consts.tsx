import CartIcon from "@/components/icons/CartIcon";
import HeartIcon from "@/components/icons/HeartIcon";
import UserIcon from "@/components/icons/UserIcon";

export const HEADER_HEIGHT = "138px";

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
    element: (
      <HeartIcon className="hover:fill-main transition-[colors,transform]" />
    ),
    tooltip: {
      id: "favorite-tooltip",
      content: `Посмотреть список \n отложенных товаров`,
    },
  },
  {
    href: "/",
    element: <CartIcon className="hover:fill-main" />,
    tooltip: {
      id: "cart-tooltip",
      content: `Корзина`,
    },
  },
  {
    href: "/",
    element: <UserIcon className="hover:fill-main transition-colors" />,
    tooltip: {
      id: "user-tooltip",
      content: `Войти`,
    },
  },
];

export const clothCategories = [
  {
    id: "costumes",
    title: "Костюмы",
  },
  {
    id: "costumes",
    title: "Платья",
  },
  {
    id: "costumes",
    title: "Юбки и шорты",
  },
  {
    id: "costumes",
    title: "Рубашки и блузы",
  },
  {
    id: "costumes",
    title: "Брюки",
  },
  {
    id: "costumes",
    title: "Поло",
  },
  {
    id: "costumes",
    title: "Деним",
  },
  {
    id: "costumes",
    title: "Жакеты и жилеты",
  },
  {
    id: "costumes",
    title: "Футболка и лонгсливы",
  },
  {
    id: "costumes",
    title: "Эко-кожа",
  },
  {
    id: "costumes",
    title: "Майки, боди, топы",
  },
  {
    id: "costumes",
    title: "Свитшоты и бомберы",
  },
  {
    id: "costumes",
    title: "Спортивные костюмы",
  },
  {
    id: "costumes",
    title: "Комбинезоны",
  },
  {
    id: "costumes",
    title: "Свитера и кардиганы",
  },
];

export const accessoriesCategories = [
  {
    id: "bags",
    title: "Сумки",
  },
  {
    id: "something",
    title: "Шарфы",
  },
  {
    id: "some",
    title: "Палантины",
  },
];

export const outerwearCategories = [
  {
    id: "bags",
    title: "Куртки",
  },
  {
    id: "something",
    title: "Пальто",
  },
  {
    id: "some",
    title: "Кожа и экокожа",
  },
  {
    id: "some",
    title: "Плащи и Тренчи",
  },
  {
    id: "some",
    title: "Пуховики",
  },
];
