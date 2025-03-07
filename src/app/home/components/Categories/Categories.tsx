import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";
import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  { id: "1", title: "Платья" },
  { id: "2", title: "Костюмы" },
  { id: "3", title: "Брюки" },
  { id: "4", title: "Рубашки и блузы" },
  { id: "5", title: "Свитшоты и бомберы" },
  { id: "6", title: "Юбки и шорты" },
  { id: "7", title: "Верхняя одежда" },
];

const Categories = () => {
  return (
    <Section className="border-b-[1px] border-b-main">
      <Container className="justify-between gap-6 my-[136px]">
        <div className="flex flex-col justify-between basis-[392px]">
          <h2 className="text-h2">
            Категории <br /> /
          </h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 grid-rows-[28px,128px]">
            <Link href="" className="link-hover col-span-2 text-button-medium">
              Смотреть все <ArrowRightIcon />
            </Link>
            <div className="relative">
              <Image
                fill
                src="/images/Categories/category-1.jpg"
                className="object-cover object-top"
                alt="category-image"
              />
            </div>
            <div className="relative">
              <Image
                fill
                className="object-cover object-center"
                src="/images/2happy-logo-black.jpg"
                alt="category-image"
              />
            </div>
          </div>
        </div>
        <div className="basis-[600px] flex flex-col">
          {CATEGORIES.map((item) => (
            <Button
              key={item.id}
              variant="tertiary"
              size="large"
              className="w-full justify-between p-4 border-b-[1px] border-main"
              asChild
            >
              <Link href={`${item.id}`}>
                {item.title} <ArrowUpRightIcon />
              </Link>
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
