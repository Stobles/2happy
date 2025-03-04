import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";
import ItemCard from "@/components/ItemCard/ItemCard";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container/Container";
import Section from "@/components/UI/Section/Section";
import Image from "next/image";

const Bestsellers = () => {
  return (
    <Section className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_-7.88%,#FFFFFF_119.05%)]">
      <Image
        fill
        className="object-cover object-[100%_35%] z-[-1] scale-x-[-1]"
        alt="bestseller-background"
        src={"/images/Bestsellers/bg.jpg"}
      />
      <Container className="grid grid-cols-[392px_495px] grid-rows-[320px_345px] gap-x-6 my-20">
        <ItemCard
          className="row-span-2"
          src="/images/Bestsellers/card-1.jpg"
          href="/"
        />
        <div className="text-h2">Наши бестселлеры / 25</div>
        <div className="flex flex-col gap-4">
          <Button variant="tertiary" size="medium">
            Смотреть все <ArrowRightIcon />
          </Button>
          <ItemCard src="/images/Bestsellers/card-2.jpg" href="/" />
        </div>
      </Container>
    </Section>
  );
};

export default Bestsellers;
