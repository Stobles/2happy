import { Category } from "@/features/Categories/types";

export const PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: `id${i + 1}`,
  title: ["Платье", "Куртка", "Брюки", "Футболка", "Рубашка"][i % 5],
  colors: [
    {
      id: 1,
      hex: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`,
    },
    {
      id: 2,
      hex: `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`,
    },
  ],
  sizes: [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ].slice(0, Math.floor(Math.random() * 5) + 1),
  price: Math.floor(Math.random() * (100000 - 30000) + 30000),
  sale: {
    price: Math.floor(Math.random() * (70000 - 20000) + 20000),
    amount: Math.floor(Math.random() * 30) + 10,
  },
  image: "/images/Home/Fashion/fashion-1.jpg",
}));
