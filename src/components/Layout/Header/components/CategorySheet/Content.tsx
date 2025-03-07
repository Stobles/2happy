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
import { accessoriesCategories, clothCategories } from "../../consts/consts";
import Link from "next/link";
import CollapsibleList from "./CollapsibleList";

const Content = (props: SheetContentProps) => {
  const firstClothList = clothCategories.slice(0, 6);
  const secondClothList = clothCategories.slice(6, -1);
  return (
    <SheetContent className="flex p-0 z-behind-header bg-white" {...props}>
      <SheetHeader className="hidden">
        <SheetTitle>Каталог</SheetTitle>
      </SheetHeader>
      <Container className="flex-col py-8">
        <div className="flex pb-12 overflow-auto">
          <div className="flex flex-col basis-full pr-[72px] border-r-[1px] border-stroke-black">
            <h3 className="text-h3 pb-4">Одежда</h3>
            <CollapsibleList
              mainlist={firstClothList}
              collapsibleList={secondClothList}
            />
            <div className="relative w-full h-[120px] shrink-0">
              <Image
                fill
                className="object-cover object-top"
                src="/images/header/category-sheet-1.png"
                alt="category-clothes"
              />
            </div>
          </div>
          <div className="flex flex-col basis-full px-[72px] border-r-[1px] border-stroke-black">
            <h3 className="text-h3 pb-4">Аксессуары</h3>
            <ul className="space-y-2 pb-6">
              {accessoriesCategories.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`/${item.id}`}
                    className="text-button-normal link-hover"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative w-full h-full">
              <Image
                fill
                src="/images/header/category-sheet-2.png"
                alt="category-accessories"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col justify-between basis-full pl-[72px]">
            <div>
              <h3 className="text-h3 pb-4">Верхняя одежда</h3>
              <ul className="space-y-2 pb-6">
                {accessoriesCategories.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={`/${item.id}`}
                      className="text-button-normal link-hover"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full h-[168px]">
              <Image
                fill
                className="object-cover object-top"
                src="/images/header/category-sheet-1.png"
                alt="category-clothes"
              />
            </div>
          </div>
        </div>
        <Button className="w-full" variant="tertiary" size="large">
          Перейти в каталог
          <ArrowUpRightIcon />
        </Button>
      </Container>
    </SheetContent>
  );
};

export default Content;
