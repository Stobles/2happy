import ArrowUpRightIcon from "@/components/icons/Arrows/ArrowUpRightIcon";
import { Button } from "@/components/UI/Button";
import Container from "@/components/UI/Container/Container";
import Section from "@/components/UI/Section/Section";
import Slider from "./components/Slider/Slider";

const Main = () => {
  return (
    <Section className="pt-12 pb-20">
      <Container className="flex gap-6 items-center h-full">
        <div className="basis-full">
          <h1 className="text-h1Akira mb-10">2HAPPY</h1>
          <div className="flex gap-4">
            <span className="w-[64px] mt-4 h-[2px] bg-main" />
            <div className="flex flex-col">
              <span className="text-h4 mb-20">
                Стильная и комфортная <br /> одежда на все случаи жизни!
              </span>
              <Button className="w-full" variant="secondary" size="large">
                Перейти в каталог <ArrowUpRightIcon />
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
