import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRight";
import ChevronIcon from "@/components/icons/Chevron";
import { Button } from "@/components/UI/Button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/UI/Collapsible";
import Container from "@/components/UI/Container/Container";
import {
  SheetContent,
  SheetContentProps,
  SheetHeader,
  SheetTitle,
} from "@/components/UI/Sheet";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import Image from "next/image";
import { accessoriesCategories, clothCategories } from "../../consts";

const CategorySheetContent = (props: SheetContentProps) => {
  const firstClothList = clothCategories.slice(0, 6);
  const secondClothList = clothCategories.slice(6, -1);
  return (
    <SheetContent className="flex p-0 z-behind-header bg-white" {...props}>
      <SheetHeader className="hidden">
        <SheetTitle>Каталог</SheetTitle>
      </SheetHeader>
      <Container className="flex flex-col py-8 ">
        <div className="flex pb-12">
          <div className="flex flex-col basis-full pr-[72px] border-r-[1px] border-stroke-black">
            <h3 className="text-h3 pb-4">Одежда</h3>

            <ul className="space-y-2">
              {firstClothList.map((item) => (
                <li key={item.title}>
                  <StyledLink
                    href={`/${item.id}`}
                    className="text-button-normal"
                  >
                    {item.title}
                  </StyledLink>
                </li>
              ))}
            </ul>
            <Collapsible className="pb-6">
              <CollapsibleContent>
                <ul className="space-y-2 mt-2">
                  {secondClothList.map((item) => (
                    <li key={item.title}>
                      <StyledLink
                        href={`/${item.id}`}
                        className="text-button-normal"
                      >
                        {item.title}
                      </StyledLink>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
              <CollapsibleTrigger className="flex items-center mt-2 text-button-xs">
                Еще <ChevronIcon />
              </CollapsibleTrigger>
            </Collapsible>
            <div className="relative w-full h-[120px]">
              <Image
                fill
                src="/images/header/category-sheet-1.png"
                objectFit="cover"
                objectPosition="50% 30%"
                alt="category-clothes"
              />
            </div>
          </div>
          <div className="flex flex-col basis-full px-[72px] border-r-[1px] border-stroke-black">
            <h3 className="text-h3 pb-4">Аксессуары</h3>
            <ul className="space-y-2 pb-6">
              {accessoriesCategories.map((item) => (
                <li key={item.title}>
                  <StyledLink
                    href={`/${item.id}`}
                    className="text-button-normal"
                  >
                    {item.title}
                  </StyledLink>
                </li>
              ))}
            </ul>
            <div className="relative w-full h-full">
              <Image
                fill
                src="/images/header/category-sheet-2.png"
                alt="category-accessories"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between basis-full pl-[72px]">
            <div>
              <h3 className="text-h3 pb-4">Верхняя одежда</h3>
              <ul className="space-y-2 pb-6">
                {accessoriesCategories.map((item) => (
                  <li key={item.title}>
                    <StyledLink
                      href={`/${item.id}`}
                      className="text-button-normal"
                    >
                      {item.title}
                    </StyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full h-[168px]">
              <Image
                fill
                src="/images/header/category-sheet-1.png"
                objectFit="cover"
                objectPosition="50% 30%"
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

export default CategorySheetContent;
