import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import {
  SheetContent,
  SheetContentProps,
  SheetHeader,
  SheetTitle,
} from "@/components/UI/Sheet";
import Image from "next/image";
import Link from "next/link";
import ClothesList from "./CategoryLists/ClothesList";
import { Suspense } from "react";
import { paths } from "@/config/paths";
import AccessoriesList from "./CategoryLists/AccessoriesList";
import OuterwearList from "./CategoryLists/OuterwearList";
import CategoryListLoader from "./CategoryLists/CategoryListLoader";

const Content = (props: SheetContentProps) => {
  return (
    <SheetContent className="flex p-0 z-behind-header-2 bg-white" {...props}>
      <SheetHeader className="hidden">
        <SheetTitle>Каталог</SheetTitle>
      </SheetHeader>
      <Container className="flex-col py-8">
        <div className="flex pb-12 overflow-auto">
          <div className="flex flex-col basis-full gap-4 pr-[72px] border-r-[1px] border-stroke-black">
            <div>
              <h3 className="text-h3 pb-4">Одежда</h3>
              <Suspense fallback={<CategoryListLoader count={7} />}>
                <ClothesList />
              </Suspense>
            </div>
            <div className="relative w-full h-[120px] shrink-0">
              <Image
                fill
                className="object-cover object-top"
                src="/images/Header/category-sheet-1.png"
                alt="category-clothes"
              />
            </div>
          </div>
          <div className="flex flex-col basis-full gap-4 px-[72px] border-r-[1px] border-stroke-black">
            <div>
              <h3 className="text-h3 pb-4">Аксессуары</h3>
              <Suspense fallback={<CategoryListLoader count={3} />}>
                <AccessoriesList />
              </Suspense>
            </div>
            <div className="relative w-full flex-1">
              <Image
                fill
                src="/images/Header/category-sheet-2.png"
                alt="category-accessories"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 basis-full pl-[72px]">
            <div>
              <h3 className="text-h3 pb-4">Верхняя одежда</h3>
              <Suspense fallback={<CategoryListLoader count={5} />}>
                <OuterwearList />
              </Suspense>
            </div>
            <div className="relative w-full h-[168px]">
              <Image
                fill
                className="object-cover object-top"
                src="/images/Header/category-sheet-1.png"
                alt="category-clothes"
              />
            </div>
          </div>
        </div>
        <Button className="w-full" variant="tertiary" size="large" asChild>
          <Link href={paths.catalog.root}>
            Перейти в каталог
            <ArrowUpRightIcon />
          </Link>
        </Button>
      </Container>
    </SheetContent>
  );
};

export default Content;
