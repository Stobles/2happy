"use client";

import CloseIcon from "@/components/icons/CloseIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import { Input } from "@/components/UI/Input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/Sheet";
import ProductCardWithButton from "@/features/Products/components/ProductCardWithButton";
import { Product } from "@/features/Products/types";
import Link from "next/link";

const PRODUCTS: Product[] = [
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
    image: "/images/Fashion/fashion-1.jpg",
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
    image: "/images/Fashion/fashion-1.jpg",
  },
  {
    id: "id3",
    title: "Платье",
    colors: [
      { id: 1, hex: "#111112" },
      { id: 2, hex: "#3F4753" },
    ],
    sizes: [{ id: 1, size: "XS" }],
    price: 50000,
    image: "/images/Fashion/fashion-1.jpg",
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
    image: "/images/Fashion/fashion-1.jpg",
  },
];

const SearchSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex gap-2 group hover:text-middleGrey transition-colors">
        <SearchIcon className="group-hover:fill-middleGrey" />
        Поиск
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-[800px] z-over-header p-10 bg-white"
      >
        <Container className="flex-col gap-12 h-full">
          <SheetHeader className="relative flex flex-col gap-12 w-full">
            <SheetTitle className="hidden">Поиск</SheetTitle>
            <div>
              <h2 className="text-h2Akira text-center">2HAPPY</h2>
              <SheetClose className="absolute right-0 top-[20px] mt-0">
                <CloseIcon />
              </SheetClose>
            </div>
            <div className="flex">
              <Input
                startIcon={<SearchIcon />}
                placeholder="Поиск"
                className="w-full"
              />
              <Button className="px-12" size="normal">
                Найти
              </Button>
            </div>
          </SheetHeader>
          <div className="flex gap-6 h-full">
            <div className="flex flex-col gap-6 w-full max-w-[185px]">
              <h5 className="text-h5">Часто ищут</h5>
              <ul>
                <li>
                  <Link className="link-hover" href="/">
                    Спортивные костюмы
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" href="/">
                    Платья
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" href="/">
                    Кардиганы
                  </Link>
                </li>
                <li>
                  <Link className="link-hover" href="/">
                    Пальто
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h5 className="text-h5">Популярные товары</h5>
              <ul className="flex h-full gap-10">
                {PRODUCTS.map((product) => (
                  <li key={product.id} className="w-full">
                    <ProductCardWithButton product={product} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
