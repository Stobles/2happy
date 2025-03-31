import { TCategories } from "@/features/Categories/consts/consts";

export const CATEGORIES: {
  name: string;
  slug: TCategories;
  parent?: TCategories | undefined;
}[] = [
  {
    name: "Платья",
    slug: "dresses",
    parent: "clothes",
  },
  {
    name: "Костюмы",
    slug: "costumes",
    parent: "clothes",
  },
  {
    name: "Брюки",
    slug: "trousers",
    parent: "clothes",
  },
  {
    name: "Рубашки и блузы",
    slug: "shirts",
    parent: "clothes",
  },
  {
    name: "Свитшоты и бомберы",
    slug: "sweatshirtsAndBomberJackets",
    parent: "clothes",
  },
  {
    name: "Юбки и шорты",
    slug: "skirts",
    parent: "clothes",
  },
  {
    name: "Верхняя одежда",
    slug: "outerwear",
  },
];
