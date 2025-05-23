import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const NewMain = () => {
  return (
    <Section className="border-b border-main bg-partnership-banner h-[865px]">
      <Image
        fill
        className="object-cover -z-10"
        src="/images/Partnership/main.jpg"
        alt="main-image"
      />
      <Container className="gap-6 items-center h-full">
        <div className="space-y-8 -mt-6">
          <h1 className="text-h1 uppercase">
            Партнёрство <br /> с брендом 2HAPPY
          </h1>
          <div className="flex gap-4 ml-[104px]">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col gap-16 max-w-[456px] w-full">
              <span className="text-h5">
                Мы открыты к сотрудничеству и всегда рады новым возможностям.
                Если вы разделяете наши ценности — давайте расти вместе!
              </span>
              <Button className="w-full" size="large" asChild>
                <a target="_blank" href="https://wa.me/77021657378">
                  Стать партнером <ArrowUpRightIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NewMain;
