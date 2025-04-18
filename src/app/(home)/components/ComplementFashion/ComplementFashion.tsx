import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import ItemCard from "@/features/Fashion/components/ItemCard";
import { Button } from "@/shared/components/UI/Button";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import Link from "next/link";
import { paths } from "@/config/paths";

const ComplementFashion = () => {
  return (
    <Section className="bg-main">
      <Container className="flex flex-col gap-16 my-20">
        <div className="flex gap-6">
          <div className="relative w-[80px] h-[640px]">
            <Image
              src="/images/2happy-white-logo-90.png"
              alt="white-logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-addition grid-rows-addition gap-x-6 h-full overflow-hidden">
            <ItemCard
              className="row-span-2"
              href="/"
              src="/images/Home/ComplementFashion/1.jpg"
            />

            <ItemCard
              className="row-span-2"
              href="/"
              src="/images/Home/ComplementFashion/2.jpg"
            />
            <ItemCard href="/" src="/images/Home/ComplementFashion/3.jpg" />
            <div className="flex flex-col justify-end">
              <Button
                variant="tertiary"
                className="w-full text-white [&_svg]:fill-white"
                asChild
              >
                <Link href={paths.catalog.getHref()}>
                  Перейти в каталог
                  <ArrowUpRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ComplementFashion;
