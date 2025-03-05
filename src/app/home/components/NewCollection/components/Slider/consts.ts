import { Product } from "@/features/Products/types";

export const SIZES = {
  big: { width: "288px", height: "552px" },
  medium: { width: "184px", height: "464px" },
  small: { width: "184px", height: "376px" },
} as const;

export const SLIDES_SIZES: Array<keyof typeof SIZES> = [
  "big",
  "small",
  "small",
  "small",
  "medium",
  "big",
  "small",
  "medium",
  "small",
] as const;

export const SLIDES: (Product | "custom")[] = [
  {
    id: "id1",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [
      { id: 1, size: "XS" },
      { id: 2, size: "S" },
      { id: 3, size: "M" },
    ],
    price: 50000,
    sale: {
      price: 25000,
      amount: 25,
    },
    image: "",
  },
  {
    id: "id2",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
  "custom",
  {
    id: "id3",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
  {
    id: "id4",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
  {
    id: "id5",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
  {
    id: "id6",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
  {
    id: "id7",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
  {
    id: "id8",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "",
  },
];
