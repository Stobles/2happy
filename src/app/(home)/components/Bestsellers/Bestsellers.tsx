import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import ItemCard from "@/features/Fashion/components/ItemCard";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import { paths } from "@/config/paths";

const Bestsellers = () => {
  return (
    <Section className="bg-gradient-to-r from-main to-main/0">
      <div className="absolute w-full h-full bg-main z-[-2]" />
      <Image
        fill
        className="object-cover bg-main object-[100%_35%] z-[-1] scale-x-[-1] opacity-50"
        alt="bestseller-background"
        src={"/images/Home/Bestsellers/bg.jpg"}
      />
      <Container className="grid grid-cols-[392px_495px] grid-rows-[320px_345px] gap-x-6 my-24">
        <ItemCard
          className="row-span-2"
          imageClassName="scale-x-[-1]"
          src="/images/Home/Bestsellers/card-1.jpg"
          href="/"
        />
        <h2 className="text-h2 text-white">Наши бестселлеры / 25</h2>
        <div className="flex flex-col gap-4">
          <Button
            className="text-white [&_svg]:fill-white"
            variant="tertiary"
            size="medium"
            asChild
          >
            <Link href={paths.catalog.bestsellers.getHref()}>
              Смотреть все <ArrowRightIcon />
            </Link>
          </Button>
          <ItemCard
            imageClassName="scale-x-[-1]"
            src="/images/Home/Bestsellers/card-2.jpg"
            href="/"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Bestsellers;
