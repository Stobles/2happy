"use client";

import CloseIcon from "@/components/icons/CloseIcon";
import SearchIcon from "@/components/icons/SearchIcon";
import Container from "@/components/UI/Container";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/UI/Sheet";
import Link from "next/link";

const SearchSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex gap-2 group hover:text-middleGrey transition-colors">
        <SearchIcon className="group-hover:fill-middleGrey" />
        Поиск
      </SheetTrigger>
      <SheetContent side="top" className="h-[800px] z-over-header p-10">
        <Container className="flex flex-col gap-12">
          <SheetHeader className="relative flex flex-col gap-12 w-full">
            <SheetTitle className="hidden">Поиск</SheetTitle>
            <div>
              <h2 className="text-h2Akira text-center">2HAPPY</h2>
              <SheetClose className="absolute right-0 top-[20px] mt-0">
                <CloseIcon />
              </SheetClose>
            </div>
            <div>Поиск</div>
          </SheetHeader>
          <div className="flex gap-6">
            <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-6">
              <h5 className="text-h5">Популярные товары</h5>
              <ul>Вставить карточки товаров</ul>
            </div>
          </div>
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default SearchSheet;
