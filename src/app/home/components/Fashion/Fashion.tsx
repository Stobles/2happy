import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container/Container";
import Section from "@/components/UI/Section/Section";
import SectionLogo from "@/components/UI/SectionLogo/SectionLogo";
import FashionCard from "@/features/Fashion/components/FashionCard";

const Fashion = () => {
  return (
    <Section className="my-[136px]">
      <Container className="relative flex flex-col gap-16">
        <SectionLogo className="right-[-20px] top-[-64px]" />
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
