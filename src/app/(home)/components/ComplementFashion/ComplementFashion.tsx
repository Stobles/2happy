import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";
import Container from "@/components/UI/Container";
import Section from "@/components/UI/Section";
import Image from "next/image";
import Link from "next/link";
import Slider from "./components/Slider/Slider";

const ComplementFashion = () => {
  return (
    <Section>
      <Image
        fill
        className="rotate-180"
        src="/images/section-bg.png"
        alt="section-bg"
      />
      <Container className="flex flex-col gap-16 my-20 text-white">
        <div className="flex justify-between items-end">
          <h2 className="text-h2 text-white ">Дополните свой образ</h2>
          <Link
            href="/"
            className="flex items-center text-button-normal link-hover"
          >
            Смотреть все
            <ArrowRightIcon className="fill-white group-hover:fill-gray-middle" />
          </Link>
        </div>
        <div className="flex gap-6">
          <div className="relative left-0 w-[184px] h-[640px]">
            <Image
              fill
              src="/images/2happy-logo-90-white.png"
              alt="white-logo"
            />
          </div>
          <div className="flex-1 overflow-hidden">
            <Slider />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ComplementFashion;
