import { paths } from "@/config/paths";
import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Image from "next/image";
import Link from "next/link";

const NewMain = () => {
  return (
    <Section className="pt-12 pb-20 border-b border-main h-[865px]">
      <Image
        fill
        className="object-cover"
        src="/images/Home/Main/main.jpg"
        alt="main-image"
      />
      <Container className="gap-6 items-center h-full">
        <div className="-mt-20">
          <h1 className="text-h3Akira mb-10">2HAPPY</h1>
          <div className="flex gap-4">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col max-w-[440px] w-full">
              <span className="text-h4 mb-20">
                Стильная и комфортная <br /> одежда на все случаи жизни!
              </span>
              <Button className="w-full" size="large" asChild>
                <Link href={paths.catalog.getHref()}>
                  Перейти в каталог <ArrowUpRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NewMain;
