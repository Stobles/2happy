import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import FashionCard from "@/features/Fashion/components/FashionCard";
import Image from "next/image";

const Fashion = () => {
  return (
    <Section className="my-[136px]">
      <Container className="flex-col gap-16">
        <Image
          className="absolute w-[992px] h-[112px] top-[-64px] right-0"
          width={1208}
          height={128}
          src="/images/section-logo.png"
          alt="section-logo"
        />
        <h2 className="text-h2">
          Готовые образы <br /> /
        </h2>
        <div className="grid h-full grid-cols-4 grid-rows-[repeat(7,80px)] gap-x-6">
          <FashionCard
            className="row-span-5"
            title="Спорт шик"
            href="/"
            src="/images/Fashion/fashion-1.jpg"
          />
          <div className="w-full flex flex-col justify-between bg-main pt-10 pb-6 px-4 text-white text-center row-span-3">
            <span className="text-h5">
              С &quot;Образами 2Happy&quot; создать идеальный лук стало просто и
              удобно
            </span>
            <Button className="w-full" size="medium">
              Все образы <ArrowUpRightIcon />
            </Button>
          </div>
          <FashionCard
            className="row-span-7"
            title="Спорт шик"
            href="/"
            src="/images/Fashion/fashion-3.jpg"
          />
          <FashionCard
            className="row-span-6"
            title="Спорт шик"
            href="/"
            src="/images/Fashion/fashion-4.jpg"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Fashion;
