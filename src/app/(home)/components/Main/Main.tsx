import ArrowUpRightIcon from "@/shared/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/shared/components/UI/Button";
import Container from "@/shared/components/UI/Container";
import Section from "@/shared/components/UI/Section";
import Slider from "./components/Slider/Slider";
import Link from "next/link";
import { paths } from "@/config/paths";

const Main = () => {
  return (
    <Section className="pt-12 pb-20 border-b border-main">
      <Container className="gap-6 items-center h-full">
        <div className="basis-full">
          <h1 className="text-h1Akira mb-10">2HAPPY</h1>
          <div className="flex gap-4">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col">
              <span className="text-h4 mb-20">
                Стильная и комфортная <br /> одежда на все случаи жизни!
              </span>
              <Button
                className="w-full"
                variant="secondary"
                size="large"
                asChild
              >
                <Link href={paths.catalog.getHref()}>
                  Перейти в каталог <ArrowUpRightIcon />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <Slider />
      </Container>
    </Section>
  );
};

export default Main;
